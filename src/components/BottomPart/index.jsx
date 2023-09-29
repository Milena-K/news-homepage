import "./style.scss";
import GrowthGaming from "../../assets/images/image-gaming-growth.jpg";
import TopLaptops from "../../assets/images/image-top-laptops.jpg";
import RetroPC from "../../assets/images/image-retro-pcs.jpg";

const articles = [
  {
    number: 1,
    title: 'Reviving Retro PCs',
    text: 'What happens when old PCs are given modern upgrades?',
  },
  {
    number: 2,
    title: 'Top 10 Laptops of 2022',
    text: ' Our best picks of various need and budgets.',
  },
  {
    number: 3,
    title: 'The Growth of Gaming',
    text: 'How the pandemic has sparked fresh opportunities.',
  },
];
const images = [RetroPC, TopLaptops, GrowthGaming];


function BottomPart() {
  return (
    <div className="articles">
      {
        articles.map((article, index) => (
          <div className="article" key={article.number}>
            <img className="article__image" alt="Retro macintosh" src={images[index]} />
            <div className="article__content">
              <h4 className="article__number">{article.number}</h4>
              <h5 className="article__title"><a href="/">{article.title}</a></h5>
              <p className="article__text">{article.text}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default BottomPart;
