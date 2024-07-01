import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const leaderBoard = [
  {
    name: "Xavier",
    xp: 1043251,
    rank: 1,
    social: [
      {
        name: "facebook",
        url: "https://facebook.com/xavier",
      },
      {
        name: "twitter",
        url: "https://twitter.com/xavier",
      },
    ],
  },
  {
    name: "Yvonne",
    xp: 978452,
    rank: 2,
    social: [
      {
        name: "facebook",
        url: "https://facebook.com/yvonne",
      },
      {
        name: "twitter",
        url: "https://twitter.com/yvonne",
      },
    ],
  },
  {
    name: "Zachary",
    xp: 876543,
    rank: 3,
    social: [
      {
        name: "facebook",
        url: "https://facebook.com/zachary",
      },
      {
        name: "twitter",
        url: "https://twitter.com/zachary",
      },
    ],
  },
  {
    name: "Alice",
    xp: 765432,
    rank: 4,
    social: [
      {
        name: "facebook",
        url: "https://facebook.com/alice",
      },
      {
        name: "twitter",
        url: "https://twitter.com/alice",
      },
    ],
  },
  {
    name: "Bob",
    xp: 654321,
    rank: 5,
    social: [
      {
        name: "facebook",
        url: "https://facebook.com/bob",
      },
      {
        name: "twitter",
        url: "https://twitter.com/bob",
      },
    ],
  },
  {
    name: "Charlie",
    xp: 543210,
    rank: 6,
    social: [
      {
        name: "facebook",
        url: "https://facebook.com/charlie",
      },
      {
        name: "twitter",
        url: "https://twitter.com/charlie",
      },
    ],
  },
  {
    name: "David",
    xp: 432109,
    rank: 7,
    social: [
      {
        name: "facebook",
        url: "https://facebook.com/david",
      },
      {
        name: "twitter",
        url: "https://twitter.com/david",
      },
    ],
  },
  {
    name: "Eve",
    xp: 321098,
    rank: 8,
    social: [
      {
        name: "facebook",
        url: "https://facebook.com/eve",
      },
      {
        name: "twitter",
        url: "https://twitter.com/eve",
      },
    ],
  },
  {
    name: "Frank",
    xp: 210987,
    rank: 9,
    social: [
      {
        name: "facebook",
        url: "https://facebook.com/frank",
      },
      {
        name: "twitter",
        url: "https://twitter.com/frank",
      },
    ],
  },
  {
    name: "Grace",
    xp: 109876,
    rank: 10,
    social: [
      {
        name: "facebook",
        url: "https://facebook.com/grace",
      },
      {
        name: "twitter",
        url: "https://twitter.com/grace",
      },
    ],
  },
  {
    name: "Hank",
    xp: 98765,
    rank: 11,
    social: [
      {
        name: "facebook",
        url: "https://facebook.com/hank",
      },
      {
        name: "twitter",
        url: "https://twitter.com/hank",
      },
    ],
  },
  {
    name: "Ivy",
    xp: 87654,
    rank: 12,
    social: [
      {
        name: "facebook",
        url: "https://facebook.com/ivy",
      },
      {
        name: "twitter",
        url: "https://twitter.com/ivy",
      },
    ],
  },
  {
    name: "Jack",
    xp: 76543,
    rank: 13,
    social: [
      {
        name: "facebook",
        url: "https://facebook.com/jack",
      },
      {
        name: "twitter",
        url: "https://twitter.com/jack",
      },
    ],
  },
  {
    name: "Kathy",
    xp: 65432,
    rank: 14,
    social: [
      {
        name: "facebook",
        url: "https://facebook.com/kathy",
      },
      {
        name: "twitter",
        url: "https://twitter.com/kathy",
      },
    ],
  },
];

export const GET = async () => {
  return NextResponse.json({
    board: leaderBoard,
  });
};
