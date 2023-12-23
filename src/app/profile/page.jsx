import styles from "./Profile.module.css";
export default function Page() {
    return (
        <form className={styles.form}>
            <fieldset>
                <legend>Account Details</legend>
                <div>
                    <label htmlFor='fname'>First name *</label>
                    <input
                        type='text'
                        id='fname'
                        name='fname'
                        required
                        placeholder='First name'
                    />
                </div>
                <div>
                    <label htmlFor='lname'>Last name:</label>
                    <input
                        type='text'
                        id='lname'
                        name='lname'
                        required
                        placeholder='Last name'
                    />
                </div>
                <div>
                    <label htmlFor='dname'>Display name *</label>
                    <input
                        type='text'
                        id='dname'
                        name='dname'
                        required
                        placeholder='Display name'
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email *</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        required
                        placeholder='Email'
                    />
                </div>
            </fieldset>

            <fieldset>
                <legend>Password</legend>
                <div>
                    <label htmlFor='oldpassword'>Old Password</label>
                    <input
                        type='password'
                        id='oldpassword'
                        name='oldpassword'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='newpassword'>New Password</label>
                    <input
                        type='password'
                        id='newpassword'
                        name='newpassword'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='repeatpassword'>Repeat Password</label>
                    <input
                        type='password'
                        id='repeatpassword'
                        name='repeatpassword'
                        required
                    />
                </div>
                <button>Save changes</button>
            </fieldset>
        </form>
    );
}
