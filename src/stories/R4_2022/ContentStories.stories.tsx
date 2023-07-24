import {Story, Meta} from "@storybook/react/types-6-0";
import {ContentStories, iContentStories} from "../../components/ContentStories/ContentStoriesContainer/ContentStories";


export default{
  title : "Hold/Content Stories",
  component : ContentStories,
  argTypes : {
    label: {
      name : "Label for button",
      description: 'overwritten description',
      table: {
        summary: 'something short',
        category : "Text",
        subcategory : "button text",
        type: { detail: 'something really really long' },
      },
      control: {
        type: "text",
      },
    },
  }
} as Meta;
const Template:Story<iContentStories>=(args)=><ContentStories {...args} />;
export const Example = Template.bind({});

Example.args = {
  groupHeader : "This is the Header",
  showDescription : true,
  heroImagesOnly : false,
  articles : [
    {
      articleTitle : "Our Commitment to Sustainability",
      linkToArticle : "",
      articleImagePath : "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      itemSize : "hero",
      tags : ["sustainability", "recycling", "environmental"],
      articleDescription : "Chevron’s commitment to sustainability has never been stronger. Our approach is integrated throughout our business to strive to protect the environment, empower people, and get results the right way—today and tomorrow."
    },
    {
      articleTitle : "The temperature of your water is what will matter most in determining flavor",
      linkToArticle : "",
      articleImagePath : "https://images.unsplash.com/photo-1422433555807-2559a27433bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      itemSize : "small",
      tags : ["flavor", "brewing", "temperature"],
      articleDescription : "Pour at a lower temperature (185 degrees) and you'll extract fewer of the bean's nascent flavor notes and end with a more bitter taste; pour at a higher temperature (205 degrees), and you'll discover..."
    },
    {
      articleTitle : "How Starbucks Is Using Artificial Intelligence and IoT",
      linkToArticle : "",
      articleImagePath : "https://assets1.risnews.com/styles/content_hero_1300/s3/2019-10/SBX20191030-Earnings-Q4FY19-Featured-Image.jpg?itok=W5nV5IjO",
      itemSize : "small",
      tags : ["flavor", "brewing", "temperature"],
      articleDescription : "Starbucks is “dialing up” its artificial intelligence (AI) investments, according to its CEO Kevin Johnson, and the investment may be helping."
    },
    {
      articleTitle : "Coffee | The Nutrition Source | Harvard T.H. Chan School of Public Health",
      linkToArticle : "",
      articleImagePath : "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2019/02/caffeine-close-up-coffee-539432-1024x683.jpg",
      itemSize : "small",
      tags : ["health", "brewing", "nutrition"],
      articleDescription : "Coffee lovers around the world who reach for their favorite morning brew probably ... One 8-ounce cup of brewed coffee contains about 95 mg of caffeine."
    },
    {
      articleTitle : "Keurig Dr Pepper Achieves Longstanding Sustainability Commitment to Make 100% of its K-Cup Pods Recyclable",
      linkToArticle : "",
      articleImagePath : "https://coffeeaffection.com/wp-content/uploads/2019/08/How-to-be-an-Eco-Friendly-Keurig-User.jpg",
      itemSize : "small",
      tags : ["sustainability", "recycling"],
      articleDescription : "The extensive effort involved converting more than 100 manufacturing lines to produce the pods now made from polypropylene #5 plastic."
    },
    {
      articleTitle : "Keurig Introduces BrewID, the Company's New Connected Technology Platform",
      linkToArticle : "",
      articleImagePath : "https://mma.prnewswire.com/media/1581892/Keurig_KSPS_Lifestyle_2_Cropped.jpg?p=publish",
      itemSize : "hero",
      tags : ["technology", "SMART"],
      articleDescription : "Launching with the new K-Supreme Plus SMART brewer, the signature technology platform will power the next generation of Keurig brewers, offering the system's most advanced quality, customization and convenience yet"
    },
    {
      articleTitle : "How to Make Whipped Coffee",
      linkToArticle : "",
      articleImagePath : "https://static01.nyt.com/images/2020/04/08/dining/08whippedcoffee-drink/08whippedcoffee-drink-jumbo.jpg?quality=75&auto=webp",
      itemSize : "small",
      tags : ["brewing", "recipe"],
      articleDescription : "You may have seen it on Instagram or TikTok: a creamy, two-toned coffee drink"
    },
    {
      articleTitle : "Iced Coffee vs Cold Brew: A Quick Breakdown",
      linkToArticle : "",
      articleImagePath : "https://dfamgkk1duyqq.cloudfront.net/wp-content/uploads/2018/05/iced-coffee.jpg",
      itemSize : "small",
      tags : ["brewing", "recipe"],
      articleDescription : "There’s nothing like a refreshing glass of iced coffee on a warm Summer day. Despite what some hot-only coffee lovers believe, there’s plenty of room in the world for iced coffee—and it can be delicious!"
    }


  ]
}

export const TextHeavy = Template.bind({});

TextHeavy.args = {
  groupHeader : "Let's Talk About Coffee",
  showDescription : true,
  heroImagesOnly : true,
  articles : [
    {
      articleTitle : "Our Commitment to Sustainability",
      linkToArticle : "",
      articleImagePath : "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      itemSize : "hero",
      tags : ["sustainability", "recycling", "environmental"],
      articleDescription : "Chevron’s commitment to sustainability has never been stronger. Our approach is integrated throughout our business to strive to protect the environment, empower people, and get results the right way—today and tomorrow."
    },
    {
      articleTitle : "The temperature of your water is what will matter most in determining flavor",
      linkToArticle : "",
      articleImagePath : "https://images.unsplash.com/photo-1422433555807-2559a27433bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      itemSize : "small",
      tags : ["flavor", "brewing", "temperature"],
      articleDescription : "Pour at a lower temperature (185 degrees) and you'll extract fewer of the bean's nascent flavor notes and end with a more bitter taste; pour at a higher temperature (205 degrees), and you'll discover..."
    },
    {
      articleTitle : "How Starbucks Is Using Artificial Intelligence and IoT",
      linkToArticle : "",
      articleImagePath : "https://assets1.risnews.com/styles/content_hero_1300/s3/2019-10/SBX20191030-Earnings-Q4FY19-Featured-Image.jpg?itok=W5nV5IjO",
      itemSize : "small",
      tags : ["flavor", "brewing", "temperature"],
      articleDescription : "Starbucks is “dialing up” its artificial intelligence (AI) investments, according to its CEO Kevin Johnson, and the investment may be helping."
    },
    {
      articleTitle : "Coffee | The Nutrition Source | Harvard T.H. Chan School of Public Health",
      linkToArticle : "",
      articleImagePath : "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2019/02/caffeine-close-up-coffee-539432-1024x683.jpg",
      itemSize : "small",
      tags : ["health", "brewing", "nutrition"],
      articleDescription : "Coffee lovers around the world who reach for their favorite morning brew probably ... One 8-ounce cup of brewed coffee contains about 95 mg of caffeine."
    },
    {
      articleTitle : "Keurig Dr Pepper Achieves Longstanding Sustainability Commitment to Make 100% of its K-Cup Pods Recyclable",
      linkToArticle : "",
      articleImagePath : "https://coffeeaffection.com/wp-content/uploads/2019/08/How-to-be-an-Eco-Friendly-Keurig-User.jpg",
      itemSize : "small",
      tags : ["sustainability", "recycling"],
      articleDescription : "The extensive effort involved converting more than 100 manufacturing lines to produce the pods now made from polypropylene #5 plastic."
    },
    {
      articleTitle : "Keurig Introduces BrewID, the Company's New Connected Technology Platform",
      linkToArticle : "",
      articleImagePath : "https://mma.prnewswire.com/media/1581892/Keurig_KSPS_Lifestyle_2_Cropped.jpg?p=publish",
      itemSize : "hero",
      tags : ["technology", "SMART"],
      articleDescription : "Launching with the new K-Supreme Plus SMART brewer, the signature technology platform will power the next generation of Keurig brewers, offering the system's most advanced quality, customization and convenience yet"
    },
    {
      articleTitle : "How to Make Whipped Coffee",
      linkToArticle : "",
      articleImagePath : "https://static01.nyt.com/images/2020/04/08/dining/08whippedcoffee-drink/08whippedcoffee-drink-jumbo.jpg?quality=75&auto=webp",
      itemSize : "small",
      tags : ["brewing", "recipe"],
      articleDescription : "You may have seen it on Instagram or TikTok: a creamy, two-toned coffee drink"
    },
    {
      articleTitle : "Iced Coffee vs Cold Brew: A Quick Breakdown",
      linkToArticle : "",
      articleImagePath : "https://dfamgkk1duyqq.cloudfront.net/wp-content/uploads/2018/05/iced-coffee.jpg",
      itemSize : "small",
      tags : ["brewing", "recipe"],
      articleDescription : "There’s nothing like a refreshing glass of iced coffee on a warm Summer day. Despite what some hot-only coffee lovers believe, there’s plenty of room in the world for iced coffee—and it can be delicious!"
    }

  ]
}

const TemplateScroll:Story<iContentStories>=(args)=>(
  <>
    <div className="content-dummy"></div>
    <ContentStories {...args} />
    <div className="content-dummy"></div>
    <div className="content-dummy"></div>
    <div className="content-dummy"></div>
    <div className="content-dummy"></div>
    <div className="content-dummy"></div>
  </>);

export const ScrollExample= TemplateScroll.bind({})

ScrollExample.args = {
  groupHeader : "Let's Talk About Coffee",
  showDescription : true,
  heroImagesOnly : true,
  articles : [
    {
      articleTitle : "Our Commitment to Sustainability",
      linkToArticle : "",
      articleImagePath : "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      itemSize : "hero",
      tags : ["sustainability", "recycling", "environmental"],
      articleDescription : "Chevron’s commitment to sustainability has never been stronger. Our approach is integrated throughout our business to strive to protect the environment, empower people, and get results the right way—today and tomorrow."
    },
    {
      articleTitle : "The temperature of your water is what will matter most in determining flavor",
      linkToArticle : "",
      articleImagePath : "https://images.unsplash.com/photo-1422433555807-2559a27433bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      itemSize : "small",
      tags : ["flavor", "brewing", "temperature"],
      articleDescription : "Pour at a lower temperature (185 degrees) and you'll extract fewer of the bean's nascent flavor notes and end with a more bitter taste; pour at a higher temperature (205 degrees), and you'll discover..."
    },
    {
      articleTitle : "How Starbucks Is Using Artificial Intelligence and IoT",
      linkToArticle : "",
      articleImagePath : "https://assets1.risnews.com/styles/content_hero_1300/s3/2019-10/SBX20191030-Earnings-Q4FY19-Featured-Image.jpg?itok=W5nV5IjO",
      itemSize : "small",
      tags : ["flavor", "brewing", "temperature"],
      articleDescription : "Starbucks is “dialing up” its artificial intelligence (AI) investments, according to its CEO Kevin Johnson, and the investment may be helping."
    },
    {
      articleTitle : "Coffee | The Nutrition Source | Harvard T.H. Chan School of Public Health",
      linkToArticle : "",
      articleImagePath : "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2019/02/caffeine-close-up-coffee-539432-1024x683.jpg",
      itemSize : "small",
      tags : ["health", "brewing", "nutrition"],
      articleDescription : "Coffee lovers around the world who reach for their favorite morning brew probably ... One 8-ounce cup of brewed coffee contains about 95 mg of caffeine."
    },
    {
      articleTitle : "Keurig Dr Pepper Achieves Longstanding Sustainability Commitment to Make 100% of its K-Cup Pods Recyclable",
      linkToArticle : "",
      articleImagePath : "https://coffeeaffection.com/wp-content/uploads/2019/08/How-to-be-an-Eco-Friendly-Keurig-User.jpg",
      itemSize : "small",
      tags : ["sustainability", "recycling"],
      articleDescription : "The extensive effort involved converting more than 100 manufacturing lines to produce the pods now made from polypropylene #5 plastic."
    },
    {
      articleTitle : "Keurig Introduces BrewID, the Company's New Connected Technology Platform",
      linkToArticle : "",
      articleImagePath : "https://mma.prnewswire.com/media/1581892/Keurig_KSPS_Lifestyle_2_Cropped.jpg?p=publish",
      itemSize : "hero",
      tags : ["technology", "SMART"],
      articleDescription : "Launching with the new K-Supreme Plus SMART brewer, the signature technology platform will power the next generation of Keurig brewers, offering the system's most advanced quality, customization and convenience yet"
    },
    {
      articleTitle : "How to Make Whipped Coffee",
      linkToArticle : "",
      articleImagePath : "https://static01.nyt.com/images/2020/04/08/dining/08whippedcoffee-drink/08whippedcoffee-drink-jumbo.jpg?quality=75&auto=webp",
      itemSize : "small",
      tags : ["brewing", "recipe"],
      articleDescription : "You may have seen it on Instagram or TikTok: a creamy, two-toned coffee drink"
    },
    {
      articleTitle : "Iced Coffee vs Cold Brew: A Quick Breakdown",
      linkToArticle : "",
      articleImagePath : "https://dfamgkk1duyqq.cloudfront.net/wp-content/uploads/2018/05/iced-coffee.jpg",
      itemSize : "small",
      tags : ["brewing", "recipe"],
      articleDescription : "There’s nothing like a refreshing glass of iced coffee on a warm Summer day. Despite what some hot-only coffee lovers believe, there’s plenty of room in the world for iced coffee—and it can be delicious!"
    }

  ]
}


