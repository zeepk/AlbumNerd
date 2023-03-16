import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { RawAlbumSearchResponse } from "~/utils/types";

export const exampleRouter = createTRPCRouter({
  searchForAlbum: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ input, ctx }) => {
      console.log(ctx.user?.id);

      const resp = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=album.search&api_key=${process.env.LAST_FM_KEY}&album=${input.text}&format=json`
      );
      const data: RawAlbumSearchResponse = await resp.json();
      const resultCount = data.results["opensearch:totalResults"];
      console.log(`Found ${resultCount} results`);

      return {
        // only first 10 results
        albums: data.results.albummatches.album.slice(0, 10),
        resultCount,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
