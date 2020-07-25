import React, { useState} from "react";
import projects from '../projects.json';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function ProjectCard(props) {
  const classes = useStyles();

  return (

   
    <Grid item >
       
            <Card className={classes.root} rows={3} >
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image= {props.image}
                    title= {props.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" >
                    Github
                    </Button>
                    <Button size="small" color="primary">
                    Application
                    </Button>
                </CardActions>
                </Card>
         
        

    
    </Grid>
    
  );
}


function Wrapper(props) {
  return <div>{props.children}</div>;
}


function Projects() {
  // Using useState, declare a new state variable 'projectsList' and set it to the 'projects' array from 'projects.json'

  const [projectsList, setProjectsList] = useState(projects);

  
 const renderProject = (project) => {
   return (
     <ProjectCard 
     name={project.name} 
     image={project.image} 
     id={project.id} 
     github={project.github} 
     deployedapp={project.Application}
     key={project.id}
     />
   )
 }
  //

  return (
    <Wrapper>
      <h1 className="project-list mx-5 my-3"  >Project List</h1>

      
      <Container className= "mx-5 my-3">
          <Row xs={6}>
              <Col xs={4}>
              {projectsList.map((project) => (
                renderProject(project)
                ))} 
              </Col>
          </Row>
      </Container>
       
      
      

    

         
    </Wrapper>
  );
}

export default Projects;