import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getSession, Session } from "@auth0/nextjs-auth0";
import { ProfileModel } from "@/schemas/profile.schema";
import { mongoose } from "@/utils/db";
import { ProfileForm } from "@/components/forms/profile/ProfileForm";

export async function ProfileModal() {
  const { user } = (await getSession()) as Session;
  if (user) {
    await mongoose;
    const profile = await ProfileModel.findOne({ userId: user.sub });
    if (profile) return null;
  } else return null;

  return (
    <Dialog defaultOpen>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <ProfileForm userId={user.sub}>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </ProfileForm>
        </div>
      </DialogContent>
    </Dialog>
  );
}
