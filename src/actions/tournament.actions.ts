"use server";

import {
  TournamentListingDocument,
  TournamentListingModel,
} from "@/schemas/tournament-listing.schema";
import { mongoose } from "@/utils/db";
import { UTApi } from "uploadthing/server";

const utapi = new UTApi();

export const createTournament = async (tournament: any) => {
  try {
    await mongoose;
    const { files, ...rest } = tournament;
    const banner = files.get("banner");
    console.log(banner, "files");
    const response = await utapi.uploadFiles(banner);
    if (response) {
      const bannerUrl = response.data?.url;
      const newTournament =
        await TournamentListingModel.create<TournamentListingDocument>({
          ...rest,
          bannerUrl,
        });
      if (newTournament) {
        return { success: true };
      }
    } else {
      return {
        success: false,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
    };
  }
};
