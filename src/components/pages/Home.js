import {useDispatch} from "react-redux";
import {addAction} from "../../redux/actions/setActions";
import {useState} from "react";

function Home() {
    const dispatch = useDispatch();
    const [showError, setShowError] = useState('none');

    const addItem = (item) => {
        dispatch(addAction(item));
    }

    const validateForm = () => {
        let nameVal = document.getElementById('name').value;
        let subVal = document.getElementById('sub').value;
        let textVal = document.getElementById('text').value;

        if (nameVal === '' || subVal === '' || textVal === '') {
            setShowError('block');
        } else {
            setShowError('none');
            addItem({
                name: document.getElementById('name').value,
                sub: document.getElementById('sub').value,
                text: document.getElementById('text').value,
            });
            document.getElementById('name').value = '';
            document.getElementById('sub').value = '';
            document.getElementById('text').value = '';
        }
    }

    const errorStyle = {
        color: 'darkred',
        display: showError
    }

    return (
        <div>
            <header>
                Home<br/>
                <input type="text" placeholder={'Name'} id={'name'}/><br/>
                <input type="text" placeholder={'Sub heading'} id={'sub'}/><br/>
                <input type="text" placeholder={'Text'} id={'text'}/><br/>
                <button onClick={validateForm}>Click Me</button><br/>
                <p id={'error'} style={errorStyle}>Please completely fill out the form.</p>
            </header>
        </div>
    );
}

export default Home;