import '../StyleSheets/GnHomeCard.css'

function GnHomeCard(props) {
    return (

<section className='homeCard card'>
    
<div className='wrapper card-title'>
        <div className='static-text '> {props.title}  </div>
        <ul className='dynamic-txts '>
            <li><span> {props.line1} </span></li>
            <li><span> {props.line2} </span></li>
            <li><span> {props.line3} </span></li>
            <li><span> {props.line4} </span></li>

        </ul>

    </div>


</section>


    )
}


export default GnHomeCard
