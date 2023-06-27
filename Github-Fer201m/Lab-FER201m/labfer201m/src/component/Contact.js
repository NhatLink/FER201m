import React from 'react'
// import { useContext } from 'react'
// import { ThemeContext } from './ThemeContext'
import { Container } from 'react-materialize'
import { TextInput } from 'react-materialize'
// import { Text } from 'react'
import { Textarea } from 'react-materialize'
import { Button } from 'react-materialize'
// import { handleSubmit } from 'react'
import { Select } from 'react-materialize'
import { Icon } from 'react-materialize'
export default function player() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Container className='contact'>
            <h3 className='contact_head'>Contact us</h3>
            <form onSubmit={handleSubmit}>
                <TextInput id="TextInput-38" label="Your Name" />
                <TextInput id="Text Input-39" label="Your Phone" />
                <TextInput email id="TextInput-41" label="Email" validate />
                <Select id="Select-46" multiple={false} onChange={function noRefCheck() { }} value="">
                    <option disabled value="">
                        Choose your favourite movie
                    </option>
                    <option value="1">
                        SpiderMan 1
                    </option>
                    <option value="2">
                    SpiderMan 2
                    </option>
                    <option value="3">
                    SpiderMan 3
                    </option>
                    <option value="4">
                    Amazing SpiderMan 1
                    </option>
                    <option value="5">
                    Amazing SpiderMan 1
                    </option>
                    <option value="6">
                    SpiderMan Homecoming
                    </option>
                    <option value="7">
                    SpiderMan Far from home
                    </option>
                    <option value="8">
                    SpiderMan No Way Home
                    </option>
                    <option value="9">
                    SpiderMan into spider-verse
                    </option>
                </Select>
                <Textarea icon={<Icon></Icon>} id="Textarea-28" label="Comment" />
                <div className='contact_but'>
                <Button>Submit</Button>
                </div>
            </form>
        </Container>
    )
}