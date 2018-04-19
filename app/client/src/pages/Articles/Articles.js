import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./Articles.css";

class Articles extends Component {
    state = {
        articles : [],
        title : "",
        date : "",
        url : "",
        search : "",
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
        this.setState({
            search : event.target.value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.topic && this.state.startYear && this.state.endYear) {
            API.articleSearch(this.state.search, this.state.startYear, this.state.endYear)
                .then(res => {
                    if (res.data.status === "error") {
                        throw new Error(res.data.message);
                    }
                    this.setState({ 
                        results : res.data.message, error : "" 
                    });
                    console.log(res.data);
                })
                .catch(err => this.setState({
                    error : err.message
                }));
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
                                <Input 
                                    onChange={this.handleInputChange}
                                    name="topic"
                                    placeholder="Topic (required)"
                                />
                                <Input
                                    onChange={this.handleInputChange}
                                    name="startYear"
                                    placeholder="Start Year (required)"
                                />
                                <Input 
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
                                                {article.title}
                                                {article.date}
                                                {article.url}
                                            </strong>
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
