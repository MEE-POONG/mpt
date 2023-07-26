import React from 'react';
import { Form } from 'react-bootstrap';
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const FormCreateCopy: React.FC = () => {
    return (
        <div className="item-details-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <div className="line-dec"></div>
                            <h2>Apply For <em>Your Item</em> Here.</h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <form id="contact" action="" method="post">
                            <div className="col-lg-4">
                                <Form.Group className="mb-3" controlId="itemTitle">
                                    <Form.Label>Item Title</Form.Label>
                                    <Form.Control type="text" placeholder="Ex. Lyon King" required />
                                </Form.Group>
                            </div>
                            <div className="col-lg-4">
                                <Form.Group className="mb-3" controlId="itemDescription">
                                    <Form.Label>Description For Item</Form.Label>
                                    <Form.Control type="text" placeholder="Give us your idea" required />
                                </Form.Group>
                            </div>
                            <div className="col-lg-4">
                                <Form.Group className="mb-3" controlId="username">
                                    <Form.Label>Your Username</Form.Label>
                                    <Form.Control type="text" placeholder="Ex. @alansmithee" required />
                                </Form.Group>
                            </div>
                            <div className="col-lg-6">
                                <Form.Group className="mb-3" controlId="itemPrice">
                                    <Form.Label>Price Of Item</Form.Label>
                                    <Form.Control type="text" placeholder="Price depends on quality. Ex. 0.06 ETH" required />
                                </Form.Group>
                            </div>
                            <div className="col-lg-6">
                                <Form.Group className="mb-3" controlId="royalties">
                                    <Form.Label>Royalties</Form.Label>
                                    <Form.Control type="text" placeholder="Common royalties 1-25%" required />
                                </Form.Group>
                            </div>
                            <div className="col-lg-4">
                                <Form.Group className="mb-3" controlId="file">
                                    <Form.Label>Your File</Form.Label>
                                    <Form.Control type="file" multiple />
                                </Form.Group>
                            </div>
                            <div className="col-lg-8">
                                <button type="submit" id="form-submit" className="orange-button">Submit Your Applying</button>
                            </div>

                        </form>
                    </div>
                    {/* <div className="col-lg-12">
                        <div className="section-heading">
                            <div className="line-dec"></div>
                            <h2>This Is <em>Your Item</em> Preview.</h2>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-7">
                        <div className="left-image">
                            <img src="assets/images/create-yours.jpg" alt="" style="border-radius: 20px;">
                        </div>
                    </div> */}
                    {/* <div className="col-lg-5 align-self-center">
                        <h4>Dolores Haze Westworld Eye</h4>
                        <span className="author">
                            <img src="assets/images/author-02.jpg" alt="" style="max-width: 50px; border-radius: 50%;">
                                <h6>Kataleya Smithee<br><a href="#">@kataleey</a></h6>
                        </span>
                        <p>Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="row">
                            <div className="col-3">
                                <span className="bid">
                                    Current Bid<br><strong>0.06 ETH</strong><br><em>($8055,35)</em>
                                    </span>
                                    </div>
                                    <div className="col-4">
                                        <span className="owner">
                                            Owner<br><strong>Alan Smithee</strong><br><em>(@asmithee)</em>
                                            </span>
                                            </div>
                                            <div className="col-5">
                                                <span className="ends">
                                                    Ends In<br><strong>3D 05H 20M 58S</strong><br><em>(January 22nd, 2021)</em>
                                                    </span>
                                                    </div>
                                            </div>
                                    </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default FormCreateCopy;
