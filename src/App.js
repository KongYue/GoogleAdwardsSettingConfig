
import React, { Component } from 'react';
import './App.css';
import Settings from './Components/Settings';
import Keywords from './Components/Keywords';
import Sites from './Components/Sites'
import Grid from '@material-ui/core/Grid';
class App extends Component {
  state = {
    keywordsList: [
      {
        id: '0',
        name: 'shoes'
      },
      {
        id: "1",
        name: "shoes carnival"
      }
      ],
    sitesList: [
      {
        id: '0',
        name: 'www.dockers.com'
      },
      {
        id: "1",
        name: "www.adidas.com"
      }
      ],
      pendingKeywordContent: "",
      pendingSiteContent: ""
  };

  handleContentInput = e => {
    if( e.target.name === "site" ) {
      this.setState({
        pendingSiteContent: e.target.value
      });
    } else if(e.target.name === "keyword") { 
      this.setState({
        pendingKeywordContent: e.target.value
      });
    }
 
  }

  lastContentId = 3;

  newContentId = () => {
    const id = this.lastContentId;
    this.lastContentId += 1;
    return id;
  };
  newContentSubmitHandler = e => {
    e.preventDefault();
    if( e.target.name === "site" ) {
      const id = this.newContentId();
      this.setState ({
        sitesList: [
          {
            id: id,
            name: this.state.pendingSiteContent
          },
           ...this.state.sitesList
          ],
          pendingSiteContent: ''
      });
    } else if(e.target.name === "keyword") {
      const id = this.newContentId();
      this.setState ({
        keywordsList: [
          {
            id: id,
            name: this.state.pendingKeywordContent
          },
           ...this.state.keywordsList
          ],
          pendingKeywordContent: ''
      });

    }

  }

  removeContent = (id, contentType) => {
    if(contentType === "keyword"){
      this.setState({
        keywordsList: this.state.keywordsList.filter(keyword => id !== keyword.id)
      });

    } else if (contentType === "site"){
      this.setState({
        sitesList: this.state.sitesList.filter(site => id !== site.id)
      });
    }
  }


  render() {
    return (
      <Grid className='Grid-root' container >
        <Keywords 
          handleContentInput={this.handleContentInput}
           keywordsList={this.state.keywordsList}
          newContentSubmitHandler = {this.newContentSubmitHandler}
          pendingKeywordContent = {this.state.pendingKeywordContent}
          removeContent = {this.removeContent}
         
        />
        <Sites 
          handleContentInput={this.handleContentInput}
          sitesList={this.state.sitesList}
          newContentSubmitHandler={this.newContentSubmitHandler}
          pendingSiteContent={this.state.pendingSiteContent}
          removeContent={this.removeContent}
        
        />
        <Settings 
          browserSetting={this.state.browserSetting}
          targetwebsiteSetting={this.state.targetwebsiteSetting}
          deviceSetting={this.state.deviceSetting}
          otherSetting={this.state.otherSetting}
          newNumberUpdate={this.newNumberUpdate}
        />
     </Grid>
    );
  }

}

export default App;
