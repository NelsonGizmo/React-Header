import React from 'react'
import Card from './Card'
import Counter from './Counter'

const Contacts = () => {
  return (
    <div className='main'>
        <h1>My Contacts</h1>
        <Card name="Allen West" img_path="data:image/png;base64,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" url="www.citigiz.com" contact="08146827700" />
        <Card name="Edward Hart" img_path="data:image/png;base64,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" url="www.eddyhart.org" contact="09036727467" />
        <Card name="Harrinton Chinwendu" img_path="data:image/png;base64,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" url="www.harrtech.uk" contact="08044883721" />
        <Card name="GoodGod Okorie" img_path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80-XCymumjq-tjtNIPMQTlZRKEuSbOu35rw&usqp=CAU" url="www.rockit.com" contact="07044738283" />
        <Counter />
    </div>
  )
}

export default Contacts