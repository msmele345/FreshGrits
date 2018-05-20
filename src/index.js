import React, { Component } from 'react'; //create and manage react components
import ReactDOM from 'react-dom'; //needed to actually load the components on the dom
import SearchBar from './components/search_bar';          //libraies need strings, components need file names 
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import PostList from './components/posts_list';
import _ from 'lodash';
const API_KEY = 'AIzaSyAb7mb0BCqk1BmBAmqalD36w4Vht678lBM';
const REDDIT = 'https://api.reddit.com/r/';


//API CALLS or fetches need to occur in the most parent component so props can be passed downstream



class App extends Component {
  constructor(props){
    super(props)

    this.state = { 
      videos:[],
      posts: [],
      selectedVideo: null
    };

    this.videoSearch('disco biscuits');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  };

  componentDidMount(){
    const posts = fetch("https://api.reddit.com/r/disco_biscuits/")
      posts 
        .then(data => data.json())
        .then(response => response.data.children)
        .then(posts => this.setState( {posts} ));
  };

  render() {
    //use utlitlty lodash function to govern search field api calls (it searchers on any keyboard change)
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300)
    // const postSearch = _.debounce(() => {this.postsSearch()}, 300);

    return (
    <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo => this.setState( {selectedVideo} )}
        videos={this.state.videos} />
        <PostList posts={this.state.posts} />
      
    </div>
    );
  }
};
ReactDOM.render(<App />, document.querySelector(".container"));





//MAIN APP COMPONENT NOTES 
//App = class (contructor)
//We need to pass instances of that class into render, not the class itself 
//Use JSX to do this 
//second arg for render is a target dom element on the page to render the component onto 

//create new component 
//component should produce html (view)
//Take component generated html and load it on the page (DOM);
//export component


//INCLUDE OTHER COMPONENTS INTO APP NOTES 
//CREATE COMPONENT FILE 
//IMPORT REACT AND OTHER LIBRARIES on new component 
//EXPORT ** component so that main app can use it 
//IMPORT SUBCOMPONENT ON MAIN APP FILE 
//USER MULTI LINE RETURN STATEMENTS to render sub component (JSX) in main app 

