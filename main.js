const url = `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news`;

fetch(url)
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
    //   ],
    // };

    data.articles.forEach((article) => {
      const { headline, description, images, links } = article;
      const section = document.createElement("section");
      section.classList = "card";
      const imgURL = images[0].url;
      section.innerHTML = `
        <a href=${links.web.href} target="_blank" >
          <div class="img-container">
            <img src=${imgURL} />
          </div>
          <h2>${headline}</h2>
          <p>${description}</p>
        </a>
      `;
      document.getElementById("container").appendChild(section);
    });
  })
  .catch((err) => console.error(err));
