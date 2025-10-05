// sports apis: https://gist.github.com/akeaswaran/b48b02f1c94f873c6655e7129910fc3b

const url = `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard`;

const url2 = `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news`;

fetch(url2)
  .then((res) => res.json())
  .then((data) => {
    // Comment out fetch call and use data below for testing to prevent getting rate limited
    // const data = {
    //   header: "NBA News",
    //   link: {
    //     language: "en",
    //     rel: ["index", "desktop", "league"],
    //     href: "https://www.espn.com/nba/",
    //     text: "All NBA News",
    //     shortText: "All News",
    //     isExternal: false,
    //     isPremium: false,
    //   },
    //   articles: [
    //     {
    //       id: 46482981,
    //       nowId: "1-46482981",
    //       contentKey: "46482981-1-5-1",
    //       dataSourceIdentifier: "e9f7cde9873bc",
    //       type: "HeadlineNews",
    //       headline:
    //         "Bronny James cold in 1st Lakers preseason game; Redick praises",
    //       description:
    //         'Bronny James struggled through a 1-for-12 shooting performance in the Lakers\' first preseason game, but coach JJ Redick said he is "a totally different player than he was a year ago."',
    //       lastModified: "2025-10-04T14:59:37Z",
    //       published: "2025-10-04T14:59:37Z",
    //       images: [
    //         {
    //           dataSourceIdentifier: "c815b9a5a04ba",
    //           id: 46482994,
    //           type: "header",
    //           name: "Bronny James [600x400]",
    //           caption:
    //             'Bronny James struggled through a 1-for-12 shooting performance in the Lakers\' first preseason game, but coach JJ Redick said he is "a totally different player than he was a year ago."',
    //           credit: "Denis Poroy/Imagn Images",
    //           height: 400,
    //           width: 600,
    //           url: "https://a.espncdn.com/photo/2025/1004/r1555269_600x400_3-2.jpg",
    //         },
    //         {
    //           type: "Media",
    //           name: "Bronny cashes in on a 3 for the Lakers",
    //           caption: "Bronny cashes in on a 3 for the Lakers",
    //           height: 324,
    //           width: 576,
    //           url: "https://a.espncdn.com/media/motion/wsc/2025/1004/78a6a2b8-2682-4a4c-99d7-2a352fa8bd45/78a6a2b8-2682-4a4c-99d7-2a352fa8bd45.jpg",
    //         },
    //       ],
    //       categories: [
    //         {
    //           id: 9385,
    //           type: "athlete",
    //           uid: "s:40~l:46~a:1966",
    //           guid: "1f6592b3-ff53-d321-8dc5-6038d48c1786",
    //           description: "LeBron James",
    //           sportId: 46,
    //           athleteId: 1966,
    //           athlete: {
    //             id: 1966,
    //             description: "LeBron James",
    //             links: {
    //               web: {
    //                 athletes: {
    //                   href: "https://www.espn.com/nba/player/_/id/1966/lebron-james",
    //                 },
    //               },
    //               mobile: {
    //                 athletes: {
    //                   href: "https://www.espn.com/nba/player/_/id/1966/lebron-james",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 409224,
    //           type: "topic",
    //           guid: "52313677-19f8-b106-ec91-d8d17e6087fe",
    //           description: "news",
    //           sportId: 0,
    //           topicId: 781,
    //         },
    //         {
    //           id: 4630,
    //           type: "team",
    //           uid: "s:40~l:46~t:13",
    //           guid: "2876e98b-b9bc-2920-4319-46e6943f8be4",
    //           description: "Los Angeles Lakers",
    //           sportId: 46,
    //           teamId: 13,
    //           team: {
    //             id: 13,
    //             description: "Los Angeles Lakers",
    //             links: {
    //               web: {
    //                 teams: {
    //                   href: "https://www.espn.com/nba/team/_/name/lal/los-angeles-lakers",
    //                 },
    //               },
    //               mobile: {
    //                 teams: {
    //                   href: "https://www.espn.com/nba/team/_/name/lal/los-angeles-lakers",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 9577,
    //           type: "league",
    //           uid: "s:40~l:46",
    //           guid: "7b3729c9-7f69-308a-bf8a-ee15a6aba154",
    //           description: "NBA",
    //           sportId: 46,
    //           leagueId: 46,
    //           league: {
    //             id: 46,
    //             description: "NBA",
    //             abbreviation: "NBA",
    //             links: {
    //               web: {
    //                 leagues: {
    //                   href: "https://www.espn.com/nba/",
    //                 },
    //               },
    //               mobile: {
    //                 leagues: {
    //                   href: "https://www.espn.com/nba/",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 633278,
    //           type: "athlete",
    //           uid: "s:40~l:46~a:4683774",
    //           guid: "456f71fd-2ce5-3f50-8d0d-f30c0159789d",
    //           description: "Bronny James",
    //           sportId: 46,
    //           athleteId: 4683774,
    //           athlete: {
    //             id: 4683774,
    //             description: "Bronny James",
    //             links: {
    //               web: {
    //                 athletes: {
    //                   href: "https://www.espn.com/nba/player/_/id/4683774/bronny-james",
    //                 },
    //               },
    //               mobile: {
    //                 athletes: {
    //                   href: "https://www.espn.com/nba/player/_/id/4683774/bronny-james",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           type: "guid",
    //           guid: "1f6592b3-ff53-d321-8dc5-6038d48c1786",
    //         },
    //         {
    //           type: "guid",
    //           guid: "52313677-19f8-b106-ec91-d8d17e6087fe",
    //         },
    //         {
    //           type: "guid",
    //           guid: "2876e98b-b9bc-2920-4319-46e6943f8be4",
    //         },
    //         {
    //           type: "guid",
    //           guid: "7b3729c9-7f69-308a-bf8a-ee15a6aba154",
    //         },
    //         {
    //           type: "guid",
    //           guid: "456f71fd-2ce5-3f50-8d0d-f30c0159789d",
    //         },
    //       ],
    //       premium: false,
    //       links: {
    //         web: {
    //           href: "https://www.espn.com/nba/story/_/id/46482981/bronny-cold-lakers-preseason-debut-redick-praises-growth",
    //         },
    //         mobile: {
    //           href: "http://m.espn.go.com/nba/story?storyId=46482981",
    //         },
    //         api: {
    //           self: {
    //             href: "https://content.core.api.espn.com/v1/sports/news/46482981",
    //           },
    //         },
    //         app: {
    //           sportscenter: {
    //             href: "sportscenter://x-callback-url/showStory?uid=46482981",
    //           },
    //         },
    //       },
    //     },
    //     {
    //       id: 46482487,
    //       nowId: "1-46482487",
    //       contentKey: "46482487-1-293-1",
    //       dataSourceIdentifier: "8200b654655e9",
    //       type: "Media",
    //       headline: "Phoenix Suns vs. Los Angeles Lakers: Game Highlights",
    //       description: "Phoenix Suns vs. Los Angeles Lakers: Game Highlights",
    //       lastModified: "2025-10-04T04:56:16Z",
    //       published: "2025-10-04T04:56:16Z",
    //       images: [
    //         {
    //           name: "Phoenix Suns vs. Los Angeles Lakers: Game Highlights",
    //           caption: "Phoenix Suns vs. Los Angeles Lakers: Game Highlights",
    //           alt: "",
    //           height: 324,
    //           width: 576,
    //           url: "https://a.espncdn.com/media/motion/wsc/2025/1004/514bf9d3-bf32-453b-b0ac-7ca6379ecca8/514bf9d3-bf32-453b-b0ac-7ca6379ecca8.jpg",
    //         },
    //       ],
    //       categories: [
    //         {
    //           id: 191422,
    //           type: "topic",
    //           guid: "9660cd01-90a5-2726-f826-03bcf57d32ae",
    //           description: "nba highlight",
    //           sportId: 0,
    //           topicId: 707,
    //         },
    //         {
    //           id: 140940,
    //           type: "athlete",
    //           uid: "s:40~l:46~a:3136193",
    //           guid: "493046d7-fa60-d8a1-1397-b9a6dca8dedf",
    //           description: "Devin Booker",
    //           sportId: 46,
    //           athleteId: 3136193,
    //           athlete: {
    //             id: 3136193,
    //             description: "Devin Booker",
    //             links: {
    //               web: {
    //                 athletes: {
    //                   href: "https://www.espn.com/nba/player/_/id/3136193/devin-booker",
    //                 },
    //               },
    //               mobile: {
    //                 athletes: {
    //                   href: "https://www.espn.com/nba/player/_/id/3136193/devin-booker",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 12025,
    //           type: "league",
    //           guid: "12c6e39f-b760-49b1-8e4c-b3eb90814c34",
    //           description: "Fantasy NBA",
    //           sportId: 0,
    //           leagueId: 3090,
    //           league: {
    //             id: 3090,
    //             description: "Fantasy NBA",
    //             links: {
    //               web: {},
    //               mobile: {},
    //             },
    //           },
    //         },
    //         {
    //           id: 4630,
    //           type: "team",
    //           uid: "s:40~l:46~t:13",
    //           guid: "2876e98b-b9bc-2920-4319-46e6943f8be4",
    //           description: "Los Angeles Lakers",
    //           sportId: 46,
    //           teamId: 13,
    //           team: {
    //             id: 13,
    //             description: "Los Angeles Lakers",
    //             links: {
    //               web: {
    //                 teams: {
    //                   href: "https://www.espn.com/nba/team/_/name/lal/los-angeles-lakers",
    //                 },
    //               },
    //               mobile: {
    //                 teams: {
    //                   href: "https://www.espn.com/nba/team/_/name/lal/los-angeles-lakers",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 711828,
    //           type: "editorialindicator",
    //           guid: "b14f9e1f-2d2c-3b10-b39d-d781f4c4aba7",
    //           description: "4 Star Rating",
    //         },
    //         {
    //           id: 384180,
    //           type: "athlete",
    //           uid: "s:40~l:46~a:4397077",
    //           guid: "4cd92ac1-73ce-653d-c3b1-9c68e9c7a4d0",
    //           description: "Jaxson Hayes",
    //           sportId: 46,
    //           athleteId: 4397077,
    //           athlete: {
    //             id: 4397077,
    //             description: "Jaxson Hayes",
    //             links: {
    //               web: {
    //                 athletes: {
    //                   href: "https://www.espn.com/nba/player/_/id/4397077/jaxson-hayes",
    //                 },
    //               },
    //               mobile: {
    //                 athletes: {
    //                   href: "https://www.espn.com/nba/player/_/id/4397077/jaxson-hayes",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 503007,
    //           type: "athlete",
    //           uid: "s:40~l:46~a:4066457",
    //           guid: "8a9d9e1c-6174-0009-4883-3b4e16b492d0",
    //           description: "Austin Reaves",
    //           sportId: 46,
    //           athleteId: 4066457,
    //           athlete: {
    //             id: 4066457,
    //             description: "Austin Reaves",
    //             links: {
    //               web: {
    //                 athletes: {
    //                   href: "https://www.espn.com/nba/player/_/id/4066457/austin-reaves",
    //                 },
    //               },
    //               mobile: {
    //                 athletes: {
    //                   href: "https://www.espn.com/nba/player/_/id/4066457/austin-reaves",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 9577,
    //           type: "league",
    //           uid: "s:40~l:46",
    //           guid: "7b3729c9-7f69-308a-bf8a-ee15a6aba154",
    //           description: "NBA",
    //           sportId: 46,
    //           leagueId: 46,
    //           league: {
    //             id: 46,
    //             description: "NBA",
    //             abbreviation: "NBA",
    //             links: {
    //               web: {
    //                 leagues: {
    //                   href: "https://www.espn.com/nba/",
    //                 },
    //               },
    //               mobile: {
    //                 leagues: {
    //                   href: "https://www.espn.com/nba/",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 4644,
    //           type: "team",
    //           uid: "s:40~l:46~t:21",
    //           guid: "c6eade89-5971-0e84-8ccb-cd91482b2b50",
    //           description: "Phoenix Suns",
    //           sportId: 46,
    //           teamId: 21,
    //           team: {
    //             id: 21,
    //             description: "Phoenix Suns",
    //             links: {
    //               web: {
    //                 teams: {
    //                   href: "https://www.espn.com/nba/team/_/name/phx/phoenix-suns",
    //                 },
    //               },
    //               mobile: {
    //                 teams: {
    //                   href: "https://www.espn.com/nba/team/_/name/phx/phoenix-suns",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 686872,
    //           type: "athlete",
    //           uid: "s:40~l:46~a:5203685",
    //           guid: "2cf33fe2-4a92-3188-9d87-78ac5aac53be",
    //           description: "Khaman Maluach",
    //           sportId: 46,
    //           athleteId: 5203685,
    //           athlete: {
    //             id: 5203685,
    //             description: "Khaman Maluach",
    //             links: {
    //               web: {
    //                 athletes: {
    //                   href: "https://www.espn.com/nba/player/_/id/5203685/khaman-maluach",
    //                 },
    //               },
    //               mobile: {
    //                 athletes: {
    //                   href: "https://www.espn.com/nba/player/_/id/5203685/khaman-maluach",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 711824,
    //           type: "editorialindicator",
    //           guid: "d348c764-47d9-3e31-bd75-d39dfde52c26",
    //           description: "SC4U  - Eligible",
    //         },
    //         {
    //           id: 711821,
    //           type: "editorialindicator",
    //           guid: "f3e05446-8d07-3064-a239-c10c32884ea2",
    //           description: "SC4U - Full Highlight",
    //         },
    //         {
    //           type: "event",
    //           uid: "s:40~l:46~e:401812482",
    //           guid: "74886a89-5087-32f9-a41a-07009ea72f34",
    //           description: "Phoenix Suns @ Los Angeles Lakers",
    //           eventId: 401812482,
    //           event: {
    //             id: 401812482,
    //             sport: "basketball",
    //             league: "nba",
    //             description: "Phoenix Suns @ Los Angeles Lakers",
    //             links: {
    //               web: {
    //                 event: {
    //                   href: "https://www.espn.com/nba/game/_/gameId/401812482",
    //                 },
    //               },
    //               mobile: {
    //                 event: {
    //                   href: "https://www.espn.com/nba/game/_/gameId/401812482",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           type: "guid",
    //           guid: "9660cd01-90a5-2726-f826-03bcf57d32ae",
    //         },
    //         {
    //           type: "guid",
    //           guid: "493046d7-fa60-d8a1-1397-b9a6dca8dedf",
    //         },
    //         {
    //           type: "guid",
    //           guid: "12c6e39f-b760-49b1-8e4c-b3eb90814c34",
    //         },
    //         {
    //           type: "guid",
    //           guid: "2876e98b-b9bc-2920-4319-46e6943f8be4",
    //         },
    //         {
    //           type: "guid",
    //           guid: "b14f9e1f-2d2c-3b10-b39d-d781f4c4aba7",
    //         },
    //         {
    //           type: "guid",
    //           guid: "4cd92ac1-73ce-653d-c3b1-9c68e9c7a4d0",
    //         },
    //         {
    //           type: "guid",
    //           guid: "8a9d9e1c-6174-0009-4883-3b4e16b492d0",
    //         },
    //         {
    //           type: "guid",
    //           guid: "7b3729c9-7f69-308a-bf8a-ee15a6aba154",
    //         },
    //         {
    //           type: "guid",
    //           guid: "c6eade89-5971-0e84-8ccb-cd91482b2b50",
    //         },
    //         {
    //           type: "guid",
    //           guid: "2cf33fe2-4a92-3188-9d87-78ac5aac53be",
    //         },
    //         {
    //           type: "guid",
    //           guid: "d348c764-47d9-3e31-bd75-d39dfde52c26",
    //         },
    //         {
    //           type: "guid",
    //           guid: "f3e05446-8d07-3064-a239-c10c32884ea2",
    //         },
    //         {
    //           type: "guid",
    //           guid: "74886a89-5087-32f9-a41a-07009ea72f34",
    //         },
    //       ],
    //       premium: false,
    //       links: {
    //         web: {
    //           href: "https://www.espn.com/video/clip?id=46482487",
    //           self: {
    //             href: "https://www.espn.com/video/clip?id=46482487",
    //           },
    //           seo: {
    //             href: "https://www.espn.com/video/clip/_/id/46482487",
    //           },
    //         },
    //         api: {
    //           self: {
    //             href: "https://content.core.api.espn.com/v1/video/clips/46482487",
    //           },
    //           artwork: {
    //             href: "https://artwork.api.espn.com/artwork/collections/media/7c4ee72b-816e-4767-904e-c778843dde3b",
    //           },
    //         },
    //         sportscenter: {
    //           href: "sportscenter://x-callback-url/showVideo?videoID=46482487&videoDSI=8200b654655e9",
    //         },
    //       },
    //     },
    //     {
    //       id: 46482396,
    //       nowId: "1-46482396",
    //       contentKey: "46482396-1-21-1",
    //       dataSourceIdentifier: "e1b7b191dc75c",
    //       type: "Recap",
    //       headline:
    //         "Lakers lose their preseason opener 103-81 to Suns with LeBron James, Luka Doncic sitting out",
    //       description:
    //         "— Austin Reaves scored 20 points and Bronny James added eight while the Los Angeles Lakers lost their preseason opener 103-81 to the Phoenix Suns on Friday night with LeBron James and Luka Doncic sitting out.",
    //       lastModified: "2025-10-04T04:37:47Z",
    //       published: "2025-10-04T04:37:47Z",
    //       images: [
    //         {
    //           type: "stitcher",
    //           name: "espn.applewatch.awayhome.1",
    //           url: "https://s.espncdn.com/stitcher/sports/basketball/nba/events/401812482.png?templateId=espn.applewatch.awayhome.1",
    //         },
    //         {
    //           type: "stitcher",
    //           name: "espn.applewatch.homeaway.1",
    //           url: "https://s.espncdn.com/stitcher/sports/basketball/nba/events/401812482.png?templateId=espn.applewatch.homeaway.1",
    //         },
    //         {
    //           type: "stitcher",
    //           name: "espn.all.awayhome.16x9.1",
    //           ratio: "16x9",
    //           height: 173,
    //           width: 308,
    //           url: "https://s.espncdn.com/stitcher/sports/basketball/nba/events/401812482.png?templateId=espn.all.awayhome.16x9.1",
    //         },
    //         {
    //           type: "stitcher",
    //           name: "espn.all.homeaway.16x9.1",
    //           ratio: "16x9",
    //           height: 173,
    //           width: 308,
    //           url: "https://s.espncdn.com/stitcher/sports/basketball/nba/events/401812482.png?templateId=espn.all.homeaway.16x9.1",
    //         },
    //         {
    //           type: "stitcher",
    //           name: "espn.all.awayhome.1x1.1",
    //           ratio: "1x1",
    //           height: 308,
    //           width: 308,
    //           url: "https://s.espncdn.com/stitcher/sports/basketball/nba/events/401812482.png?templateId=espn.all.awayhome.1x1.1",
    //         },
    //         {
    //           type: "stitcher",
    //           name: "espn.all.homeaway.1x1.1",
    //           ratio: "1x1",
    //           height: 308,
    //           width: 308,
    //           url: "https://s.espncdn.com/stitcher/sports/basketball/nba/events/401812482.png?templateId=espn.all.homeaway.1x1.1",
    //         },
    //         {
    //           type: "stitcher",
    //           name: "espn.all.awayhome.5x2.1",
    //           ratio: "5x2",
    //           height: 124,
    //           width: 308,
    //           url: "https://s.espncdn.com/stitcher/sports/basketball/nba/events/401812482.png?templateId=espn.all.awayhome.5x2.1",
    //         },
    //         {
    //           type: "stitcher",
    //           name: "espn.all.homeaway.5x2.1",
    //           ratio: "5x2",
    //           height: 124,
    //           width: 308,
    //           url: "https://s.espncdn.com/stitcher/sports/basketball/nba/events/401812482.png?templateId=espn.all.homeaway.5x2.1",
    //         },
    //         {
    //           type: "stitcher",
    //           name: "espn.all.awayhome.16x9.2",
    //           ratio: "16x9",
    //           height: 353,
    //           width: 628,
    //           url: "https://s.espncdn.com/stitcher/sports/basketball/nba/events/401812482.png?templateId=espn.all.awayhome.16x9.2",
    //         },
    //         {
    //           type: "stitcher",
    //           name: "espn.all.homeaway.16x9.2",
    //           ratio: "16x9",
    //           height: 353,
    //           width: 628,
    //           url: "https://s.espncdn.com/stitcher/sports/basketball/nba/events/401812482.png?templateId=espn.all.homeaway.16x9.2",
    //         },
    //         {
    //           type: "stitcher",
    //           name: "espn.all.awayhome.5x2.2",
    //           ratio: "5x2",
    //           height: 251,
    //           width: 628,
    //           url: "https://s.espncdn.com/stitcher/sports/basketball/nba/events/401812482.png?templateId=espn.all.awayhome.5x2.2",
    //         },
    //         {
    //           type: "stitcher",
    //           name: "espn.all.homeaway.5x2.2",
    //           ratio: "5x2",
    //           height: 251,
    //           width: 628,
    //           url: "https://s.espncdn.com/stitcher/sports/basketball/nba/events/401812482.png?templateId=espn.all.homeaway.5x2.2",
    //         },
    //         {
    //           type: "Media",
    //           name: "Phoenix Suns vs. Los Angeles Lakers: Game Highlights",
    //           caption: "Phoenix Suns vs. Los Angeles Lakers: Game Highlights",
    //           height: 324,
    //           width: 576,
    //           url: "https://a.espncdn.com/media/motion/wsc/2025/1004/514bf9d3-bf32-453b-b0ac-7ca6379ecca8/514bf9d3-bf32-453b-b0ac-7ca6379ecca8.jpg",
    //         },
    //       ],
    //       categories: [
    //         {
    //           id: 4630,
    //           type: "team",
    //           uid: "s:40~l:46~t:13",
    //           guid: "2876e98b-b9bc-2920-4319-46e6943f8be4",
    //           description: "Los Angeles Lakers",
    //           sportId: 46,
    //           teamId: 13,
    //           team: {
    //             id: 13,
    //             description: "Los Angeles Lakers",
    //             links: {
    //               web: {
    //                 teams: {
    //                   href: "https://www.espn.com/nba/team/_/name/lal/los-angeles-lakers",
    //                 },
    //               },
    //               mobile: {
    //                 teams: {
    //                   href: "https://www.espn.com/nba/team/_/name/lal/los-angeles-lakers",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 4644,
    //           type: "team",
    //           uid: "s:40~l:46~t:21",
    //           guid: "c6eade89-5971-0e84-8ccb-cd91482b2b50",
    //           description: "Phoenix Suns",
    //           sportId: 46,
    //           teamId: 21,
    //           team: {
    //             id: 21,
    //             description: "Phoenix Suns",
    //             links: {
    //               web: {
    //                 teams: {
    //                   href: "https://www.espn.com/nba/team/_/name/phx/phoenix-suns",
    //                 },
    //               },
    //               mobile: {
    //                 teams: {
    //                   href: "https://www.espn.com/nba/team/_/name/phx/phoenix-suns",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 9577,
    //           type: "league",
    //           uid: "s:40~l:46",
    //           guid: "7b3729c9-7f69-308a-bf8a-ee15a6aba154",
    //           description: "NBA",
    //           sportId: 46,
    //           leagueId: 46,
    //           league: {
    //             id: 46,
    //             description: "NBA",
    //             abbreviation: "NBA",
    //             links: {
    //               web: {
    //                 leagues: {
    //                   href: "https://www.espn.com/nba/",
    //                 },
    //               },
    //               mobile: {
    //                 leagues: {
    //                   href: "https://www.espn.com/nba/",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           type: "event",
    //           uid: "s:40~l:46~e:401812482",
    //           guid: "74886a89-5087-32f9-a41a-07009ea72f34",
    //           description: "Phoenix Suns @ Los Angeles Lakers",
    //           eventId: 401812482,
    //           event: {
    //             id: 401812482,
    //             sport: "basketball",
    //             league: "nba",
    //             description: "Phoenix Suns @ Los Angeles Lakers",
    //             links: {
    //               web: {
    //                 event: {
    //                   href: "https://www.espn.com/nba/game/_/gameId/401812482",
    //                 },
    //               },
    //               mobile: {
    //                 event: {
    //                   href: "https://www.espn.com/nba/game/_/gameId/401812482",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           type: "guid",
    //           guid: "2876e98b-b9bc-2920-4319-46e6943f8be4",
    //         },
    //         {
    //           type: "guid",
    //           guid: "c6eade89-5971-0e84-8ccb-cd91482b2b50",
    //         },
    //         {
    //           type: "guid",
    //           guid: "7b3729c9-7f69-308a-bf8a-ee15a6aba154",
    //         },
    //         {
    //           type: "guid",
    //           guid: "74886a89-5087-32f9-a41a-07009ea72f34",
    //         },
    //       ],
    //       premium: false,
    //       links: {
    //         web: {
    //           href: "http://www.espn.com/nba/recap?gameId=401812482",
    //         },
    //         mobile: {
    //           href: "http://m.espn.go.com/nba/story?storyId=46482396",
    //         },
    //         api: {
    //           self: {
    //             href: "https://content.core.api.espn.com/v1/sports/news/46482396",
    //           },
    //         },
    //         app: {
    //           sportscenter: {
    //             href: "sportscenter://x-callback-url/showStory?uid=46482396",
    //           },
    //         },
    //       },
    //     },
    //     {
    //       id: 46481618,
    //       nowId: "1-46481618",
    //       contentKey: "46481618-1-293-1",
    //       dataSourceIdentifier: "061ba8531c1b9",
    //       type: "Media",
    //       headline: "Trey takes flight for the Aussie fans",
    //       description:
    //         "Murphy rises up and throws it down, putting the exclamation point on a fan-fueled night.",
    //       lastModified: "2025-10-04T02:30:12Z",
    //       published: "2025-10-04T02:30:12Z",
    //       images: [
    //         {
    //           name: "Trey takes flight for the Aussie fans",
    //           caption:
    //             "Murphy rises up and throws it down, putting the exclamation point on a fan-fueled night.",
    //           alt: "",
    //           height: 324,
    //           width: 576,
    //           url: "https://a.espncdn.com/media/motion/2025/1003/dm_251003_INET__Highlight_Trey_takes_flight_for_the_Aussie_fans_20251004_AUS_ONLY/dm_251003_INET__Highlight_Trey_takes_flight_for_the_Aussie_fans_20251004_AUS_ONLY.jpg",
    //         },
    //       ],
    //       categories: [
    //         {
    //           id: 169353,
    //           type: "league",
    //           uid: "s:40~l:55",
    //           guid: "ddd1160c-3532-33de-ade0-53b8ecbaa38e",
    //           description: "National Basketball League",
    //           sportId: 55,
    //           leagueId: 55,
    //           league: {
    //             id: 55,
    //             description: "National Basketball League",
    //             abbreviation: "NBL",
    //             links: {
    //               web: {
    //                 leagues: {
    //                   href: "https://www.espn.com/nbl/",
    //                 },
    //               },
    //               mobile: {
    //                 leagues: {
    //                   href: "https://www.espn.com/nbl/",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 9577,
    //           type: "league",
    //           uid: "s:40~l:46",
    //           guid: "7b3729c9-7f69-308a-bf8a-ee15a6aba154",
    //           description: "NBA",
    //           sportId: 46,
    //           leagueId: 46,
    //           league: {
    //             id: 46,
    //             description: "NBA",
    //             abbreviation: "NBA",
    //             links: {
    //               web: {
    //                 leagues: {
    //                   href: "https://www.espn.com/nba/",
    //                 },
    //               },
    //               mobile: {
    //                 leagues: {
    //                   href: "https://www.espn.com/nba/",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 114922,
    //           type: "team",
    //           uid: "s:40~l:46~t:3",
    //           guid: "9461f397-7882-94c0-c18c-e89bdc9e570e",
    //           description: "New Orleans Pelicans",
    //           sportId: 46,
    //           teamId: 3,
    //           team: {
    //             id: 3,
    //             description: "New Orleans Pelicans",
    //             links: {
    //               web: {
    //                 teams: {
    //                   href: "https://www.espn.com/nba/team/_/name/no/new-orleans-pelicans",
    //                 },
    //               },
    //               mobile: {
    //                 teams: {
    //                   href: "https://www.espn.com/nba/team/_/name/no/new-orleans-pelicans",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           type: "guid",
    //           guid: "ddd1160c-3532-33de-ade0-53b8ecbaa38e",
    //         },
    //         {
    //           type: "guid",
    //           guid: "7b3729c9-7f69-308a-bf8a-ee15a6aba154",
    //         },
    //         {
    //           type: "guid",
    //           guid: "9461f397-7882-94c0-c18c-e89bdc9e570e",
    //         },
    //       ],
    //       premium: false,
    //       links: {
    //         web: {
    //           href: "https://www.espn.com/video/clip?id=46481618",
    //           self: {
    //             href: "https://www.espn.com/video/clip?id=46481618",
    //           },
    //           seo: {
    //             href: "https://www.espn.com/video/clip/_/id/46481618",
    //           },
    //         },
    //         api: {
    //           self: {
    //             href: "https://content.core.api.espn.com/v1/video/clips/46481618",
    //           },
    //           artwork: {
    //             href: "https://artwork.api.espn.com/artwork/collections/media/12147639-5088-410a-b748-74fec2c8da23",
    //           },
    //         },
    //         sportscenter: {
    //           href: "sportscenter://x-callback-url/showVideo?videoID=46481618&videoDSI=061ba8531c1b9",
    //         },
    //       },
    //     },
    //     {
    //       id: 46480539,
    //       nowId: "1-46480539",
    //       contentKey: "46480539-1-293-1",
    //       dataSourceIdentifier: "651fb95a57368",
    //       type: "Media",
    //       headline: "Zion shines Down Under with thunderous dunk",
    //       description:
    //         "NBA star Zion Williamson thrills fans in Australia with an explosive alley-oop finish.",
    //       lastModified: "2025-10-04T02:27:05Z",
    //       published: "2025-10-04T02:27:05Z",
    //       images: [
    //         {
    //           name: "Zion shines Down Under with thunderous dunk",
    //           caption:
    //             "NBA star Zion Williamson thrills fans in Australia with an explosive alley-oop finish.",
    //           alt: "",
    //           height: 324,
    //           width: 576,
    //           url: "https://a.espncdn.com/media/motion/2025/1003/dm_251003_INET__Highlight_Zion_shines_Down_Under_with_thunderous_dunk_20251004_AUS_ONLY/dm_251003_INET__Highlight_Zion_shines_Down_Under_with_thunderous_dunk_20251004_AUS_ONLY.jpg",
    //         },
    //       ],
    //       categories: [
    //         {
    //           id: 169353,
    //           type: "league",
    //           uid: "s:40~l:55",
    //           guid: "ddd1160c-3532-33de-ade0-53b8ecbaa38e",
    //           description: "National Basketball League",
    //           sportId: 55,
    //           leagueId: 55,
    //           league: {
    //             id: 55,
    //             description: "National Basketball League",
    //             abbreviation: "NBL",
    //             links: {
    //               web: {
    //                 leagues: {
    //                   href: "https://www.espn.com/nbl/",
    //                 },
    //               },
    //               mobile: {
    //                 leagues: {
    //                   href: "https://www.espn.com/nbl/",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 9577,
    //           type: "league",
    //           uid: "s:40~l:46",
    //           guid: "7b3729c9-7f69-308a-bf8a-ee15a6aba154",
    //           description: "NBA",
    //           sportId: 46,
    //           leagueId: 46,
    //           league: {
    //             id: 46,
    //             description: "NBA",
    //             abbreviation: "NBA",
    //             links: {
    //               web: {
    //                 leagues: {
    //                   href: "https://www.espn.com/nba/",
    //                 },
    //               },
    //               mobile: {
    //                 leagues: {
    //                   href: "https://www.espn.com/nba/",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 114922,
    //           type: "team",
    //           uid: "s:40~l:46~t:3",
    //           guid: "9461f397-7882-94c0-c18c-e89bdc9e570e",
    //           description: "New Orleans Pelicans",
    //           sportId: 46,
    //           teamId: 3,
    //           team: {
    //             id: 3,
    //             description: "New Orleans Pelicans",
    //             links: {
    //               web: {
    //                 teams: {
    //                   href: "https://www.espn.com/nba/team/_/name/no/new-orleans-pelicans",
    //                 },
    //               },
    //               mobile: {
    //                 teams: {
    //                   href: "https://www.espn.com/nba/team/_/name/no/new-orleans-pelicans",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           type: "guid",
    //           guid: "ddd1160c-3532-33de-ade0-53b8ecbaa38e",
    //         },
    //         {
    //           type: "guid",
    //           guid: "7b3729c9-7f69-308a-bf8a-ee15a6aba154",
    //         },
    //         {
    //           type: "guid",
    //           guid: "9461f397-7882-94c0-c18c-e89bdc9e570e",
    //         },
    //       ],
    //       premium: false,
    //       links: {
    //         web: {
    //           href: "https://www.espn.com/video/clip?id=46480539",
    //           self: {
    //             href: "https://www.espn.com/video/clip?id=46480539",
    //           },
    //           seo: {
    //             href: "https://www.espn.com/video/clip/_/id/46480539",
    //           },
    //         },
    //         api: {
    //           self: {
    //             href: "https://content.core.api.espn.com/v1/video/clips/46480539",
    //           },
    //           artwork: {
    //             href: "https://artwork.api.espn.com/artwork/collections/media/eebcfec2-e9be-47cc-8214-8d381c40f84e",
    //           },
    //         },
    //         sportscenter: {
    //           href: "sportscenter://x-callback-url/showVideo?videoID=46480539&videoDSI=651fb95a57368",
    //         },
    //       },
    //     },
    //     {
    //       id: 46478193,
    //       nowId: "1-46478193",
    //       contentKey: "46478193-1-5-1",
    //       dataSourceIdentifier: "42684304e7369",
    //       type: "HeadlineNews",
    //       headline: "Lakers to sit Luka Doncic for first two preseason games",
    //       description:
    //         "Luka Doncic will not play in the Los Angeles Lakers' first two preseason games this weekend, the team announced Friday.",
    //       lastModified: "2025-10-03T19:12:49Z",
    //       published: "2025-10-03T19:12:49Z",
    //       images: [
    //         {
    //           dataSourceIdentifier: "a02685ef328b8",
    //           id: 44740052,
    //           type: "header",
    //           name: "Luka Doncic, Los Angeles Lakers [600x400]",
    //           credit: "(Photo by Adam Pantozzi/NBAE via Getty Images)",
    //           height: 400,
    //           width: 600,
    //           url: "https://a.espncdn.com/photo/2025/0419/r1480802_600x400_3-2.jpg",
    //         },
    //       ],
    //       categories: [
    //         {
    //           id: 409224,
    //           type: "topic",
    //           guid: "52313677-19f8-b106-ec91-d8d17e6087fe",
    //           description: "news",
    //           sportId: 0,
    //           topicId: 781,
    //         },
    //         {
    //           id: 698422,
    //           type: "contributor",
    //           guid: "1d8ecf87-0581-33b4-9cad-7e7d488956ab",
    //           description: "Dave McMenamin",
    //           slug: "dave-mcmenamin",
    //           contributor: {
    //             id: 1836,
    //             description: "Dave McMenamin",
    //             links: {
    //               web: {},
    //               mobile: {},
    //             },
    //           },
    //         },
    //         {
    //           id: 159574,
    //           type: "athlete",
    //           uid: "s:40~l:46~a:3945274",
    //           guid: "583794eb-0f38-9bbd-3e25-9dd33b7f83b8",
    //           description: "Luka Doncic",
    //           sportId: 46,
    //           athleteId: 3945274,
    //           athlete: {
    //             id: 3945274,
    //             description: "Luka Doncic",
    //             links: {
    //               web: {
    //                 athletes: {
    //                   href: "https://www.espn.com/nba/player/_/id/3945274/luka-doncic",
    //                 },
    //               },
    //               mobile: {
    //                 athletes: {
    //                   href: "https://www.espn.com/nba/player/_/id/3945274/luka-doncic",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 4630,
    //           type: "team",
    //           uid: "s:40~l:46~t:13",
    //           guid: "2876e98b-b9bc-2920-4319-46e6943f8be4",
    //           description: "Los Angeles Lakers",
    //           sportId: 46,
    //           teamId: 13,
    //           team: {
    //             id: 13,
    //             description: "Los Angeles Lakers",
    //             links: {
    //               web: {
    //                 teams: {
    //                   href: "https://www.espn.com/nba/team/_/name/lal/los-angeles-lakers",
    //                 },
    //               },
    //               mobile: {
    //                 teams: {
    //                   href: "https://www.espn.com/nba/team/_/name/lal/los-angeles-lakers",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           id: 9577,
    //           type: "league",
    //           uid: "s:40~l:46",
    //           guid: "7b3729c9-7f69-308a-bf8a-ee15a6aba154",
    //           description: "NBA",
    //           sportId: 46,
    //           leagueId: 46,
    //           league: {
    //             id: 46,
    //             description: "NBA",
    //             abbreviation: "NBA",
    //             links: {
    //               web: {
    //                 leagues: {
    //                   href: "https://www.espn.com/nba/",
    //                 },
    //               },
    //               mobile: {
    //                 leagues: {
    //                   href: "https://www.espn.com/nba/",
    //                 },
    //               },
    //             },
    //           },
    //         },
    //         {
    //           type: "guid",
    //           guid: "52313677-19f8-b106-ec91-d8d17e6087fe",
    //         },
    //         {
    //           type: "guid",
    //           guid: "1d8ecf87-0581-33b4-9cad-7e7d488956ab",
    //         },
    //         {
    //           type: "guid",
    //           guid: "583794eb-0f38-9bbd-3e25-9dd33b7f83b8",
    //         },
    //         {
    //           type: "guid",
    //           guid: "2876e98b-b9bc-2920-4319-46e6943f8be4",
    //         },
    //         {
    //           type: "guid",
    //           guid: "7b3729c9-7f69-308a-bf8a-ee15a6aba154",
    //         },
    //       ],
    //       premium: false,
    //       links: {
    //         web: {
    //           href: "https://www.espn.com/nba/story/_/id/46478193/lakers-sit-luka-doncic-first-two-preseason-games",
    //         },
    //         mobile: {
    //           href: "http://m.espn.go.com/nba/story?storyId=46478193",
    //         },
    //         api: {
    //           self: {
    //             href: "https://content.core.api.espn.com/v1/sports/news/46478193",
    //           },
    //         },
    //         app: {
    //           sportscenter: {
    //             href: "sportscenter://x-callback-url/showStory?uid=46478193",
    //           },
    //         },
    //       },
    //       byline: "Dave McMenamin",
    //     },
    //   ],
    // };
    // console.log(data);

    data.articles.forEach((article) => {
      const { headline, description, images, links } = article;
      const section = document.createElement("section");
      const imgURL = images[0].url;
      section.innerHTML = `
        <a href=${links.web.href}>
          <img src=${imgURL} />
          <h2>${headline}</h2>
          <p>${description}</p>
        </a>
      `;
      document.getElementById("container").appendChild(section);
    });
  })
  .catch((err) => console.error(err));
