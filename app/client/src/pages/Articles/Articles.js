import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./Articles.css";
import axios from "axios";

class Articles extends Component {
    state = {
        articles : [],
        // title : "",
        // date : "",
        // url : "",
        topic : "",
        startYear : "",
        endYear : ""

    };

    // componentDidMount() {
    //     this.loadArticles();
    // }

    // loadArticles = () => {
    //     API.getArticles()
    //         .then(res => 
    //             this.setState({ articles : res.data, title : "", date : "", url : "" })
    //         )
    //         .catch(err => console.log(err));
    // };

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name] : value
    //     });
    // };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.topic && this.state.startYear && this.state.endYear) {
            axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=" + this.state.topic + "&begin_date=" + this.state.startYear + "0101&end_date=" + this.state.endYear + "0101").then(res => {
                this.setState({articles:res.data.response.docs})
            });
            // API.articleSearch(this.state.topic, this.state.startYear, this.state.endYear)
            //     .then(res => {
            //         if (res.data.status === "error") {
            //             throw new Error(res.data.message);
            //         }
            //         this.setState({ 
            //             articles : res.data.message, error : "" 
            //         });
            //     })
            //     .catch(err => this.setState({
            //         error : err.message
            //     }));
        };
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size = "md-6" >
                        <Jumbotron id = "search-jumbotron">
                            <h3>Search NYT Articles</h3>
                            <form>
                                <Input value={this.state.topic}
                                    onChange={this.handleInputChange}
                                    name="topic"
                                    placeholder="Topic (required)"
                                />
                                <Input
                                    value={this.state.startYear}
                                    onChange={this.handleInputChange}
                                    name="startYear"
                                    placeholder="Start Year (required)"
                                />
                                <Input 
                                    value={this.state.endYear}
                                    onChange={this.handleInputChange}
                                    name="endYear"
                                    placeholder="End Year (required)"
                                />
                                <FormBtn
                                    // disabled={!(this.state.topic)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Search
                                </FormBtn>
                            </form>
                        </Jumbotron>
                    </Col>
                    <Col size = "md-6" >
                        <Jumbotron id = "results-jumbotron">
                            <h3>Results</h3>
                            <List>
                                {this.state.articles.map(article => (
                                    <ListItem key={article._id}>
                                        <Link to={"/articles/" + article._id}>
                                            <strong>
                                                {"'" + article.headline.main + "' "}
                                            </strong>
                                                {article.byline.original + " "}
                                                {article.pub_date}
                                                {/* {article.} */}

                                        </Link> 
                                    </ListItem>   
                                ))}
                            </List>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size = "md-2">
                    </Col>
                    <Col size = "md-8" >
                        <Jumbotron>
                            <h3>Saved Articles</h3>
                        </Jumbotron>        
                    </Col>
                </Row>
            </Container>
        );
    }
}



export default Articles;
