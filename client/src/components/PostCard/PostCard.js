import React from 'react';
import { Card, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes}}){

    function likePost(){

    }

    function commentOnPost(){

    }

    return (
        <Card fluid>
            <Card.Content>
                <Image 
                floated='right'
                size='mini' 
                src="https://react.semantic-ui.com/images/avatar/large/molly.png" 
                />
                <Card.Header>{username}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow()}</Card.Meta>
                <Card.Description>
                    {body}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                
                <Button as='div' labelPoistion ='right' onClick={likePost}>
                    <Button color='teal' basic>
                        <Icon name='heart'/>
                    </Button>
                    <Label basic color='teal' pointing='left'>
                        {likeCount}
                    </Label>
                </Button>

                <Button as='div' labelPoistion ='right' onClick={commentOnPost}>
                    <Button color='blue' basic>
                        <Icon name='comments'/>
                    </Button>
                    <Label basic color='blue' pointing='left'>
                        {commentCount}
                    </Label>
                </Button>

            </Card.Content>
        </Card>
    )
}

