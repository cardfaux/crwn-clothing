import  KangerTeach1 from '../../assets/img/directory/kangertech1.jpeg';
import Smok1 from '../../assets/img/directory/smok1.jpg';
import Vaporesso1 from '../../assets/img/directory/vaporesso1.jpeg';
import Eleaf1 from '../../assets/img/directory/eleaf1.jpeg';
import Joyetech1 from '../../assets/img/directory/joyetech1.jpeg';


const INITIAL_STATE = {
    sections: [
      {
        title: 'kangertech',
        imageUrl: KangerTeach1,
        id: 1,
        linkUrl: 'kangertech',
      },
      {
        title: 'smok',
        imageUrl: Smok1,
        id: 2,
        linkUrl: 'smok',
      },
      {
        title: 'vaporesso',
        imageUrl: Vaporesso1,
        id: 3,
        linkUrl: 'vaporesso',
      },
      {
        title: 'eleaf',
        imageUrl: Eleaf1,
        size: 'large',
        id: 4,
        linkUrl: 'eleaf',
      },
      {
        title: 'joyetech',
        imageUrl: Joyetech1,
        size: 'large',
        id: 5,
        linkUrl: 'joyetech',
      }
    ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;
  