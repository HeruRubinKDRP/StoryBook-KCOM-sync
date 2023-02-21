// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {ContentType, EntryCollection} from "contentful";
import type {NextApiRequest, NextApiResponse} from 'next'
import {carouselContentT} from "../../../components/Carousel/Kcarousel";
import {iContentItem} from "../../../components/ContentComponents/ContentComponent";

const contentful = require('contentful')

type Data = {
  pageSections: any
}

let pageName: string = ""

function runMiddleware(req: NextApiRequest, res: NextApiResponse<Data>) {
  return new Promise((resolve, reject) => {

    pageName = req.query.id as string
    return resolve(pageName)
  })

}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  await runMiddleware(req, res);
  getContent(req, res, pageName);
  //console.log("req test", req.query);

}


const getContent = (req: NextApiRequest, res: NextApiResponse, pageName: string) => {
  const client = contentful.createClient({
    space: 'wc3u8ir5o9hy',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'DRltzyisQvPy127_D7UWQOHBkLGEVvHqylqn8vbHpLc'
  })
  //console.log("page name:", pageName);
  let retrievedArticles: string[] = [];

  client.getEntries({
    'fields.pageTitle': pageName,
    content_type: 'page'
  })
    .then((response: EntryCollection<any>) => {
        retrievedArticles = response.items[0].fields.articles as string[];
        //console.log("retrievedArticles: ", retrievedArticles)

      }
    ).catch(console.error).then(
    () => {
      console.log("articles string:", getListOfArticles(retrievedArticles));
      client.getEntries({
        content_type: 'section',
        'fields.sectionMainText[in]': getListOfArticles(retrievedArticles)
      })
        .then((response: EntryCollection<any>) => {
          res.status(200).json({pageSections: transformData(response.items, retrievedArticles)})
        }).catch(console.error)
    }
  )
}


const getListOfArticles = (retrievedArticles: string[]) => {
  let articlesString: string = "";
  for (let i = 0; i < retrievedArticles.length; i++) {

    if (retrievedArticles[i].toLowerCase().includes('carousel')) {

      let workingString: string | undefined = ""

      const colonLocation = retrievedArticles[i].indexOf(':')
      if (colonLocation > -1) {
        workingString = retrievedArticles[i].split(":").pop();
      }

      if (!workingString) {
        break;
      }
      let chopped: string[] | undefined = workingString.split(",");


      chopped.map(function (currentValue, index, arr) {
        articlesString += currentValue + ","
      });

      articlesString = articlesString.replace(/\s/g, '');

      continue;
    }

    articlesString += retrievedArticles[i];

    //console.log("carousel++ articles: ", articlesString, "XXX");

    if (i < retrievedArticles.length - 1) {
      articlesString += ",";
    }
  }

  return articlesString;
}

const transformData = (response: any, articlesOrder: string[]) => {
  //console.log("carousel++ articles: ", articlesOrder, "XXX");
  //return response

  let sections: (iContentItem | carouselContentT)[] = [];

  for (let a = 0; a < articlesOrder.length; a++) {
//CHECK if it's a carousel
    if (articlesOrder[a].toLowerCase().includes("carousel")) {
      let bla = articlesOrder[a].split(":").pop();
      if (!bla) { return  }
      let carouselArticlesList = bla.split(",");


// this is slug for


      // Create content slides for carousel
      let carouselSection : carouselContentT = {
        component : "carousel",
        carouselType : "slider",
        slides : []
      };
      for(let c=0; c<carouselArticlesList.length; c++){
        //Carousel holding area

        //Get articles content from response
        for(let r=0; r<response.length; r++){
          if(carouselArticlesList[c] == response[r].fields.sectionMainText){

            // TODO make a function for this:
            let newCarouselSec: iContentItem = {
              component: "content",
              sectionName: response[c].fields.sectionName,
              sectionType: response[c].fields.sectionType,
              hasFocalImage: response[c].fields.hasFocalImage,
              focalImagePosition: response[c].fields.focalImagePosition,
              focalImageSize: response[c].fields.focalImageSize,
              mainMessage: response[c].fields.mainMessage,
              mainMessageSize: response[c].fields.mainMessageSize,
              mainMessageColor: response[c].fields.mainMessageColor,
              messageAlignment: response[c].fields.messageAlignment,
              messageTextAlignment: response[c].fields.messageTextAlignment,
              secondaryMessage: response[c].fields.secondaryMessage,
              secondaryMessageSize: response[c].fields.mainMessageSize,
              backGroundType: response[c].fields.backGroundType,
              hasVideoPlayButton: response[c].fields.hasVideoPlayButton,
              backgroundUrlPath: response[c].fields.backgroundImageOrVideo.fields.file.url,
              backgroundColor: response[c].fields.backgroundColor,
              mainTextHasShadow: response[c].fields.mainTextHasShadow,
              heightMethod: response[c].fields.heightMethod,
              widthCustom: response[c].fields.widthCustom,
              contrastBackground: response[c].fields.contrastBackground,
              hasCTA: response[c].fields.hasCTA,
              ctaLabel: response[c].fields.ctaLabel,
              ctaLinkTo: response[c].fields.ctaLinkTo
            }

            carouselSection.slides.push(newCarouselSec)
          }
        }
        //end for

        if(c == carouselArticlesList.length-1){
          console.log("caroSec:", carouselSection);
          let deepCopy = JSON.parse(JSON.stringify(carouselSection))
          sections.push(deepCopy);
          carouselSection.slides=[]

        }
      }
    }

    // if it's not a carousel for now assume it's a content section
    for (let i = 0; i < response.length; i++) {
      if (response[i].fields.sectionMainText == articlesOrder[a] && response[i].fields.sectionMainText.toLowerCase().includes("carousel")) {
        console.log("carousel++ articles: ", articlesOrder[a], "XXX");
      }

      if (response[i].fields.sectionMainText == articlesOrder[a]) {
        try {
          let newSec: iContentItem = {
            component: "content",
            hasFocalImage: response[i].fields.hasFocalImage,
            focalImagePosition: response[i].fields.focalImagePosition,
            focalImageSize: response[i].fields.focalImageSize,
            sectionName: response[i].fields.sectionName,
            sectionType: response[i].fields.sectionType,
            mainMessage: response[i].fields.mainMessage,
            mainMessageSize: response[i].fields.mainMessageSize,
            mainMessageColor: response[i].fields.mainMessageColor,
            messageAlignment: response[i].fields.messageAlignment,
            messageTextAlignment: response[i].fields.messageTextAlignment,
            secondaryMessage: response[i].fields.secondaryMessage,
            secondaryMessageSize: response[i].fields.mainMessageSize,
            backGroundType: response[i].fields.backGroundType,
            hasVideoPlayButton: response[i].fields.hasVideoPlayButton,
            backgroundUrlPath: response[i].fields.backgroundImageOrVideo.fields.file.url,
            backgroundColor: response[i].fields.backgroundColor,
            mainTextHasShadow: response[i].fields.mainTextHasShadow,
            heightMethod: response[i].fields.heightMethod,
            widthCustom: response[i].fields.widthCustom,
            contrastBackground: response[i].fields.contrastBackground,
            hasCTA: response[i].fields.hasCTA,
            ctaLabel: response[i].fields.ctaLabel,
            ctaLinkTo: response[i].fields.ctaLinkTo,
          }

          sections.push(newSec)
          break;
        } catch {
          console.log("error")
          // continue i loop;
        }
      } else {
        // continue i loop;
      }


    }
  }

  //("sections", sections);
  return sections;
}


export default handler;
