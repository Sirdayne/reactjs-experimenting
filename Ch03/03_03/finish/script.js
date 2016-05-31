
var MyComponent = React.createClass({
        render : function() {
            return   <div>
                <h1>{this.props.text}</h1>
                    <p>{this.props.children}</p>
            </div>;
                
            
            
        }
    
    
    
});

        React.render(
            <div>
                <MyComponent text='HELLO'>This is hello</MyComponent>
                <MyComponent text='WORLD'>This is world</MyComponent>
                <MyComponent text='THIS'>This is this</MyComponent>
                <MyComponent text='IS'>This is is</MyComponent>
            
            </div>
           
        , document.getElementById('react-container'));

