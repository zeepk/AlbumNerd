import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";

import { api } from "~/utils/api";
import { RawAlbum } from "~/utils/types";

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchForAlbum = api.example.searchForAlbum.useMutation();
  const albums: RawAlbum[] = searchForAlbum.data?.albums ?? [];
  const resultCount = searchForAlbum.data?.resultCount ?? 0;

  const handleSearch = async () =>
    searchForAlbum.mutateAsync({ text: searchTerm });

  return (
    <>
      <Head>
        <title>AlbumNerd</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center justify-start bg-white py-8">
        <h1 className="mb-8 text-xl font-semibold">AlbumNerd</h1>
        <div className="flex flex-row items-center">
          <InputText
            value={searchTerm}
            placeholder="Album name"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="ml-4">
            <Button
              onClick={handleSearch}
              loading={searchForAlbum.isLoading}
              label="Search"
            />
          </div>
        </div>
        <h1 className="my-8 text-lg font-semibold">Results</h1>
        {albums.length !== 0 && (
          <p>Found {resultCount.toLocaleString()} results!</p>
        )}
        <div className="flex w-[60vw] flex-row flex-wrap items-center justify-around">
          {searchForAlbum.isLoading && <ProgressSpinner />}
          {!searchForAlbum.isLoading && albums.length === 0 && (
            <p>No results</p>
          )}
          {albums.map((album) => (
            <AlbumCard key={album.name} album={album} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;

const AlbumCard = ({ album }: { album: RawAlbum }) => {
  return (
    <div className="mt-4 mb-20 flex h-40 w-40 flex-col items-center justify-start">
      <img
        className="h-32 w-32 transform transition duration-75 ease-in-out hover:scale-110"
        src={album.image.find((i) => i.size === "extralarge")?.["#text"]}
      />
      <p className="mt-2 text-ellipsis text-center text-sm font-semibold">
        {album.name}
      </p>
      <p className="text-ellipsis text-center text-xs font-semibold text-gray-600">
        {album.artist}
      </p>
    </div>
  );
};
