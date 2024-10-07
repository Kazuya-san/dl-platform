import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { JoinTournamentForm } from '@/forms/join-tournament/join-tournament.form';
import { ScrollArea } from '@/components/ui/scroll-area';

export function TournamentJoinModal({ setTab }: { setTab: () => void }) {
  //   const { user } = (await getSession()) as Session;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-[200px]">Join Tournament</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px] h-full max-h-[600px] my-6">
        <ScrollArea>
          <DialogHeader className="px-3">
            <DialogTitle>Join Tournament</DialogTitle>
            <DialogDescription>
              Join Tournament here. Click save when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4 px-3">
            <JoinTournamentForm setTab={setTab}>
              <DialogFooter>
                <Button type="submit" className="w-[130px]">
                  Register
                </Button>
              </DialogFooter>
            </JoinTournamentForm>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
