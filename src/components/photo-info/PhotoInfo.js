import React, {Component} from 'react';
import './PhotoInfo.css';
import Keywords from '../keywords/Keywords';

class PhotoInfo extends Component {
    
    render() {
        return (
            <section className="PhotoInfo">
                {this.props.fileName &&
                [<span  key="key" className="label">File name:</span>, <span key="value">{this.props.fileName}</span>]}
                
                {this.props.name &&
                [<span  key="key" className="label">Object name:</span>, <span key="value">{this.props.name}</span>]}
                
                {this.props.caption &&
                [<span  key="key" className="label">Caption:</span>, <span key="value">{this.props.caption}</span>]}
                
                {this.props.keywords &&
                [<span  key="key" className="label">Keywords:</span>, <Keywords key="value" items={this.props.keywords} />]}
            </section>
        );
    }
    
}

export default PhotoInfo;
