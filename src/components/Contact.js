import '../Styles/Contact.scss'


const Contact = () => {
    return (
        <>
            <div className='contact'>

                <main>


                    <h1>Contact</h1>

                    <form action="">

                        <div>
                            <label htmlFor="">Name</label>

                            <input type="text" required placeholder='Rohit Kumar' />
                        </div>
                        <div>
                            <label htmlFor="">Email</label>

                            <input type="email" required placeholder='Example@gmail.com' />
                        </div>                     <div>
                            <label htmlFor="">Message</label>

                            <input type="text" required placeholder='Enter Your Query...' />
                        </div>

                        <button type='submit'>Send</button>
                    </form>



                </main>


            </div>

        </>
    )
}

export default Contact;