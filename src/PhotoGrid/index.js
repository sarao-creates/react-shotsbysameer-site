import React from 'react';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import tileData from '../tileData.js';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Block } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: '30px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },

    gridList: {
        width: 1100,
    },
    titleBar: {
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    
    icon: {
        color: "white",
        margin: '0 5px 0 10px',
        fontSize: 18,
    }

}));

export default function PhotoGrid (props) {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <GridList className={classes.gridList} cellHeight={500} cols={3}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar className={classes.titleBar} title={tile.title} titlePosition="top"
                            actionIcon={<FavoriteBorderIcon className={classes.icon} />} 
                            actionPosition="left" />

                    </GridListTile>

                ))}
            </GridList>

        </div>

    );

}
