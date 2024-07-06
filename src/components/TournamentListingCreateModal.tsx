import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getSession, Session } from "@auth0/nextjs-auth0";
import { ProfileModel } from "@/schemas/profile.schema";
import { mongoose } from "@/utils/db";
import { TournamentForm } from "./forms/tournament/TournamentForm";
import { ScrollArea } from "@/components/ui/scroll-area";

export async function TournamentListingCreateModal() {
  //   const { user } = (await getSession()) as Session;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Tournament</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px] h-full max-h-[600px] my-6">
        <ScrollArea className="px-6">
          <DialogHeader>
            <DialogTitle>Create Tournament</DialogTitle>
            <DialogDescription>
              Create Tournament here. Click save when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <TournamentForm>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </TournamentForm>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
