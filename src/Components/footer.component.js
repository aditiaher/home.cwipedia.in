
const Footer =()=>{
    return(
        <div className="text-center" >
            <footer>
        <div className="container overflow-hidden">
        <div className="row gx-5">
            <div className="col-sm">

                <p className="h4">cwipedia.in</p>
                <p className="h5">Pune, Maharashtra</p>
                {/* <p className="h5">cwipedia.in</p> */}

            </div>
            <div className="col-sm">

                <a className="link">Career</a><br/>
                <a className="link">Training</a>

            </div>
            <div className="col-sm">

                <a className="link">Terms</a><br/>
                <a className="link">Contact</a>

            </div>

            <hr/>
            <p>
            Copyright &#169;2017-2021 Some rights reserved | <a className="link" href='https://www.cwipedia.in' >cwipedia.in</a>
            </p>

        </div>
        </div>

</footer>
        </div>
    )

}
export default Footer;