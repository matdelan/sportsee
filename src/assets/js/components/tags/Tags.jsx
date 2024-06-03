import './tags.sass'

export default function Tags({ userKeyData, unit, subtitle, className, logo }) {

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