import React from 'react';

class MyComponent extends React.Component {


    state = {
        name: 'Liễu Như Yên',
        channel: 'tutien'
    }

    /*
      JSX => return block
      fragment
    */

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
   render() {
       
       let name = 'quân';
       
       return (
            <>
                <div className='first'>
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    my name is {this.state.name}
                </div>
                <div className='second'>
                    my channel is {this.state.channel}
                </div>
            </>
       )
   }

}
export default MyComponent;
            
     


