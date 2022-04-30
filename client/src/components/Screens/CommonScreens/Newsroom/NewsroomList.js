import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { color1, color2 } from "../../../constants/colors";
import { getNewsroomData } from "../../../service/api";



function NewsroomList(props){

    const [newsItems,setNewsItems]=useState([]);
    const [pageNumber,setPageNumber]=useState(0);
    const [searchPageNumber,setSearchPageNumber]=useState(0);
    const [loadMoreEnable,setLoadMoreEnable]=useState(true);

    useEffect(async()=>{

        if(props.searchQuery){

            const newsroomData=await getNewsBySearch(props.searchQuery,searchPageNumber);
            if(newsroomData.remainingNewsCount <= 0){
                setLoadMoreEnable(false);
            }
    
            setNewsItems(newsItems.concat(newsroomData.data));

        }

        else{
            const newsroomData = await getNewsroomData(pageNumber);
            if(newsroomData.remainingNewsCount <= 0){
                setLoadMoreEnable(false);
            }
    
            setNewsItems(newsItems.concat(newsroomData.data));
        }
        console.log("🚀 ~ file: NewsroomList.js ~ line 16 ~ useEffect ~ newsroomData", newsroomData);
        // console.log(newsroomData);
       
        // console.log(newsItems);
        
    },[pageNumber,searchPageNumber]);

    const showNews = (e, news) => {
        console.log(news);
    }

    const loadMoreNews = async (e) => {
        e.preventDefault();
        if(props.serachQuery){
            setSearchPageNumber(searchPageNumber+1);
        }
        else{
            setPageNumber(pageNumber+1);
        }
        // setLoadMoreEnable(false);
        console.log(pageNumber);
        // const moreNewsRoomData = await getNewsroomData(pageNumber);
    }

    const newsContainer = {
        display:'flex',
        flexDirection:'column',
        width:'100%',
        alignItems:'left',
        justifyContent:'center',
        margin:'10px 2px',
        borderBottom:`1px solid ${color2}`,
        textDecoration: 'none',
        color: 'inherit'
    }

    const image_style = {
        width:'100%',
        objectFit:'content',
        height:'100%',
        maxHeight:'500px'
    }

    const image_container = {
        alignItems:'center',
        alignSelf:'center',
    }

    const content_style = {


    }

    const date_style = {
        fontSize:'25px'
    }

    const loadMoreStyle = {
        height: '45px', 
        marginBottom: '20px',
        marginLeft:'25%',
        width:'50%',
        background: color2,
        borderRadius: '5px',
        border: 'none',
        fontSize:'20px',
    }

    return(
        <div>
            {
                newsItems.map((news,ind)=>{
                    // {console.log(news)}
                    return(
                        <Link to = {`/detailednews/${news._id}`} key={ind} style={newsContainer}>                        
                            <h1>{news.title}</h1>
                            <div style={image_container}>
                                <img style={image_style} src={news.img} alt='No image'></img>
                            </div>
                            <div style = {date_style}>Posted On: {(new Date(news.createdAt)).toLocaleDateString()}</div>
                            <div style = {content_style}>{news.content.length>220?news.content.substring(0,220)+` .....`:news.content}</div>
                        </Link>
                    )

                })
            }
            <button style={loadMoreStyle} onClick={(e) => loadMoreNews(e) } disabled={!loadMoreEnable}>Load More News</button>
        </div>
    )
}

export default NewsroomList;