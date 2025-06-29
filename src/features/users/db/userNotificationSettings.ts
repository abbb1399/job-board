import { db } from "@/drizzle/db";
import { UserNotificationSettingsTable } from "@/drizzle/schema";

export async function insertUserNotificationSettings(
  settings: typeof UserNotificationSettingsTable.$inferInsert
) {
  return await db
    .insert(UserNotificationSettingsTable)
    .values(settings)
    .onConflictDoNothing();
}
