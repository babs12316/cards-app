import { ICard } from "../../constants/interfaces"
import { getFomrattedDate } from "../../helper/dateFormatter"
import style from './CardComponent.module.css'

type CardComponentProps = {
    card:ICard

} 

const CardComponent = ({card}:CardComponentProps) => {

return (
<article className={style.card} >
 <h2 className={style.title}>{card.title}</h2>
 <p className={style.description}>{card.description}</p>
 {/* anchor tags are used below assuming they are clickable and will show user cards belonging to clicked category */}
 <div className={style.categoryContainer}>
 {!card.translatable && <a href="#nonTranslatable" className={`${style.category} ${style.nonTranslatable }`}> Non Translatable</a>}
 {card.caseSensitive && <a href="#caseSensitive" className={`${style.category} ${style.caseSensitive}`}> Case Sensitive </a>}
 {card.forbidden && <a href="#forbidden" className={`${style.category} ${style.forbidden}`}> Forbidden </a>}
 </div>
 <div className={style.footer}><span>{getFomrattedDate(card.createdAt)}</span><span>{'. '+ (card.createdBy).fullName}</span></div>
</article>
)

}

export default CardComponent 