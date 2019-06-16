const BooksSchema = {
    ISBN: '',
    authors: ['', ''],
    keywords: ['', ''],
    borrowed_by: [
        { studnet_name: '', return_date: '' },
        { studnet_name: '', return_date: '' }
    ]


}


const UserSchema = {
    user_name: '',
    password: ['', ''],
    role: [''],
    tokens: [
        { token_value: '', expiery_date: '' }
    ]
}

const TicketsSchema = {
    description: '',
    status: [''],
    created_by: [USER],
    assigned_employee: [USER],
    resolve_comments: ['','']


}