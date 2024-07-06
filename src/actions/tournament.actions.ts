"use server";

import {
  TournamentListingDocument,
  TournamentListingModel,
} from "@/schemas/tournament-listing.schema";
import { mongoose } from "@/utils/db";

export const createTournament = async (
  tournament: Partial<TournamentListingDocument>
) => {
  try {
    await mongoose;
    const newTournament =
      await TournamentListingModel.create<TournamentListingDocument>(
        tournament
      );
    if (newTournament) {
      return { success: true };
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
    };
  }
};
