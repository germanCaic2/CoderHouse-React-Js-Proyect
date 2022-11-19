import React from "react";

const Contact = () => {
    return (
        <div id="Contact" className="container p-4">
            <h3 className="text-center">C O N T A C T </h3>
            <hr></hr>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <div className="d-flex flex-column w-50 p-5">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="formName" placeholder="German Caicedo"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="formEmail" placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" id="formMsg" rows="3"></textarea>
                        </div>
                        <button type="button" class="btn btn-info">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;