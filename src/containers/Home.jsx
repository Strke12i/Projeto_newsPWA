import React,{memo, useEffect, useState} from 'react';
import { Row,Col } from 'antd';
import Api from '../api';
import Economy from './components/Economy'
import World from './components/World'
import Technology from './components/Technology'

const Home=()=>{

    
    const [news,setNews]=useState([]);
    const [loading, setloading] = useState(false);


    const handleNews=(articles)=>{
        setloading(false);
        setNews({
            world: articles[0]?.value.value,
            economy: articles[1]?.value.value,
            technology: articles[2]?.value.value,
        })
    }

    useEffect(()=>{
        setloading(true);
        Promise.allSettled(
            [
                Api.getNews('world'),
                Api.getNews('economy'),
                Api.getNews('technology'),
            ]
        ).then(handleNews)
    },[])
    
    if (loading) return <div>Carregando.... :</div>

    return(
        <div>
            <Row gutter={[16,16]}>
                <Col span={24} md={16}>
                    <h2>World</h2>
                    <World values={news?.world}/>
                </Col>
                <Col span={24} md={16}>
                    <h2>Economy</h2>
                    <Economy values={news?.economy}/>
                </Col>
                <Col span={24} md={16}>
                    <h2>Tecnology</h2>
                    <Technology values={news?.technology}/>
                </Col>
            </Row>
        </div>
    )
    

}

export default memo(Home);
