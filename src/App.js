import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCheck } from 'react-icons/lib/fa';

class App extends Component {
  render() {
    return (
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="MAY 15, 2018 - MAY 23, 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaCheck />}
        >
        <h3 className="vertical-timeline-element-title">9 days</h3>
        <p>
          Learning and Exploring technologies.
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 24, 2018 - MAY 31, 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaCheck />}
        >
        <h3 className="vertical-timeline-element-title">8 days</h3>
        <p>
          Generating the appropriate OS and flashing the Android Things SOM onto NXPico.
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="JUNE 1, 2018 - JUNE 6, 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
        <h3 className="vertical-timeline-element-title">6 days</h3>
        <p>
          Assembling the devices and using the camera module to capture images.
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="JUNE 7, 2018 - JUNE 13, 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
        <h3 className="vertical-timeline-element-title">7 days</h3>
        <p>
          Creating a TensorFlow Project and use Trained models.
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="JUNE 14, 2018 - JUNE 20, 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">7 days</h3>
        <p>
          Creating a Dialogue Flow project and setting up instances and entities.
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="JUNE 21, 2018 - JUNE 27, 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">7 days</h3>
        <p>
          Sending captured images to TensorFlow and classifying objects in images.
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="JUNE 28, 2018 - JULY 5, 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">8 days</h3>
        <p>
          Processing objects found in images and sending received responses to audio jack.
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="JULY 6, 2018 - JULY 10, 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">5 days</h3>
        <p>
          Testing and optimising hardware.
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="JULY 11, 2018 - JULY 15, 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">5 days</h3>
        <p>
          Experimenting with additional features.
        </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    );
  }
}

export default App;
