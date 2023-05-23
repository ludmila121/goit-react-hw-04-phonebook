import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';



class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    };
  
    static propTypes = {
      onSubmit: PropTypes.func.isRequired,
    };
  
    handleChange = e => {
      const { name, value } = e.currentTarget;
  
      this.setState({ [name]: value });
    };
  
    handleSubmit = e => {
      e.preventDefault();
  
      //  console.log(this.state);
  
      this.props.onSubmit(this.state);
      this.reset();
    };
  
    reset = () => {
      this.setState({ name: '', number: '' });
    };
  
    render() {
      return (
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
  
          <label className={s.label}>
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
  
          <button type="submit">Add contact</button>
        </form>
      );
    }
  }
  
  export default ContactForm;