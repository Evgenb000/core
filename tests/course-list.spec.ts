import { test, expect } from "@playwright/test";

test("create delete course list", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("name...").click();
  await page.getByPlaceholder("name...").fill("Test course");
  await page.getByPlaceholder("description...").click();
  await page.getByPlaceholder("description...").fill("Test description");
  await page.getByRole("button", { name: "Add" }).click();
  await expect(
    page.getByText("Test courseTest descriptionDelete"),
  ).toBeVisible();
  await page.getByRole("button", { name: "Delete" }).click();
  await expect(
    page.getByText("Test courseTest descriptionDelete"),
  ).not.toBeVisible();
});
