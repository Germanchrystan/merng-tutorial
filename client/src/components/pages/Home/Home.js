import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Grid } from 'semantic-ui-react';
import PostCard from '../components/PostCard/PostCard'


export default function Home(){
    const { loading, data: {getPosts: posts} } = useQuery(FETCH_POSTS_QUERY);

    if(data){// SEGUIR DESDE 2:52:00
        
    }

    return(
        <Grid columns={3} divided>
            <Grid.Row className="page-title">
                <h1>Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
                {loading ? (
                    <h1>Loading posts...</h1>
                ) : (
                    posts && posts.map(post => {
                        <Grid.Column key={post.id} style={{marginBottom: 20}}>
                            <PostCard post={post} />
                        </Grid.Column>
                    })
                )}
            </Grid.Row>
        </Grid>
    )
}
const FETCH_POSTS_QUERY = gql`
    {
        getPosts{
            id body createdAt username likeCount
            likes{
                username
            }
            commentCount
            comments{
                id username createdAt body
            }
        }
    }
    `