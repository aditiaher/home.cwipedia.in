import AppDev from "../assets/ser/app.png"
import WebApp from "../assets/ser/web.png"
import MAN from "../assets/ser/man.png"
import GR from "../assets/ser/graphic.png"

const Services = ()=>{

    return(
        <>

        <p className="display-6 text-center heading">Services</p>

            <div className="container">
                <div className="row g-2">
                    <div className="col-sm">
                        <div className="card">
                            <div className="card-body">
                                <img className="img-fluid" src={AppDev} />
                                <h5 className="card-title">Mobile App Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <div className="card-body">
                                <img className="img-fluid" src={WebApp} />
                                <h5 className="card-title">Web Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <div className="card-body">
                                <img className="img-fluid" src={GR} />
                                <h5 className="card-title">Graphic Designing</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <div className="card-body">
                                <img className="img-fluid" src={MAN} />
                                <h5 className="card-title">Product Management</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default Services;