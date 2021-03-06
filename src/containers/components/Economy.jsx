import React,{memo} from 'react';
import PropTypes from 'prop-types';
import { Row,Col } from 'antd';
import { createMarkup } from '../../utils';
import { useHistory } from 'react-router';

const Economy=({values})=>{
    const history=useHistory();

    const renderImg=({image,description})=>{
        <div>
            <img src={image.url} alt={description} width="100%"/>
        </div>
    }

    const openPost=(id)=>{
        history.push(`/economy/${id}`)
    }

    const renderDescription=(description)=><p dangerouslySetInnerHTML={createMarkup(description)}/>

    const renderPost=(post,index)=>{
        const {title,image,description,id}=post;
        return(
            <Col span={24} md={12} key={`post-${index}`}>
                <article onClick={()=>openPost(id)}>
                <p>
                    <strong dangerouslySetInnerHTML={createMarkup(title)}/>
                </p>
                {image?.url ? renderImg({image,description}):renderDescription(description)}
                </article>
            </Col>
        )
    }

    return(
        <Row gutter={[16,16]}>
            {values?.map(renderPost)}
        </Row>
    )
}

Economy.defaultProps={
    values:[]
}
Economy.propTypes={
    values:PropTypes.array.isRequired
}

export default memo(Economy);