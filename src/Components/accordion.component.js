
const Accordion = () => {

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="row d-flex justify-content-center " >
                <div class="col-sm-8 ">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How Can I Contact You?
                                    </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    If you are facing out a problem related to Website Control or Study Material, please go through the Contact Us section Otherwise we are reachable at business@cwipedia.in
                                    </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Do you sponsor Final Year Projects?
                                    </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Yes, we do that. For this your need to contact us at business@cwipedia.in Our Team will get back to you.
                                    </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How to download MSBTE Study Resources?
                                    </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Hold on, we are here to answer your question, You Can able to download all study material under Diploma Engineering Section or Using Our Android App " MSBTE Practice" and "MSBTE Syllabus".
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion;