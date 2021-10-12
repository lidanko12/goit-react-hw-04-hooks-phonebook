
import {useState} from "react";
import s from './ContactForm.module.css';
export default function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const handleChange = event => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    }
    const handleSubmit = (e) => {
    e.preventDefault();
        onSubmit(name,number);
        setName('');
        setNumber('');
        
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={handleChange}
                    value={name}
                    className={s.input} />
            </label>
            <label>
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={handleChange}
                    value={number}
                    className={s.input} />
            </label>
            <button type="submit" className={s.btn}>Add contact</button>
        </form>
    )
}
// class ContactForm extends Component {
//     state = {
//         name: '',
//         number: '',
//     }

//     handleChange = e => {
//         const { name, value } = e.currentTarget;
//         this.setState({ [name]: value, })

//     };
//    handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.setState({ name: "", number: "" });

//     };


//       render() {
//         return (

        //         <form className = {s.form} onSubmit ={ this.handleSubmit}>
        //             <label>
        //                 Name
        //                 <input
        //                     type="text"
        //                     name="name"
        //                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        //                     title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        //                     required
        //                     onChange={this.handleChange}
        //                     value={this.state.name}
        //                     className ={s.input} />
        //             </label>
        //               <label>
        //                 Number
        //                 <input
        //                     type="tel"
        //                     name="number"
        //                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        //                     title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        //                     required
        //                     onChange={this.handleChange}
        //                     value={this.state.number}
        //                     className ={s.input} />
        //             </label>
        //              <button type="submit" className={s.btn}>Add contact</button>
        //         </form>


        // )
//     }
// }
// export default ContactForm