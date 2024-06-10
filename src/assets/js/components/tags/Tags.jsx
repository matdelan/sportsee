import './tags.sass'

/*
* Render a tags define by 4 parameters
* @param {Object} userKeyData - data represent the quantity by user profil 
* @param {Object} unit - for define g or Kcal or other unit
* @param {Object} subtitle - subtitle of the tag
* @param {Object} logo - icon link
* @component
* @returns { React.Component }
*/
export default function Tags({ userKeyData, unit, subtitle, logo }) {

        return (
            <article className='tags__article'>
                <img src={logo} className='tags__article-icon' alt="icon"/>
                <p className='tags__article-content'>
                    <span className='tags__article-count'>{userKeyData}{unit}</span>
                    <span>{subtitle}</span>
                </p>
            </article>
        )

}