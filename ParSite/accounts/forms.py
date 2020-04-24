from django.contrib.auth import authenticate, get_user_model
from django import forms

User = get_user_model()

class UserLogin(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)


    def clean(self, *args, **kwargs):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')

        if username and password:
            auth = authenticate(username = username, password = password)
            if not auth:
                raise forms.ValidationError("This user doesn't exist")
            if not auth.check_password(password):
                raise forms.ValidationError('Incorrect password')
            if not auth.is_active(username):
                raise forms.ValidationError("Inactive user")
        return super(UserLogin, self).clean(*args, **kwargs)


class UserRegister(forms.ModelForm):
    email = forms.EmailField(label="Email address")
    password = forms.CharField(widget=forms.PasswordInput, label="password")
    password2 = forms.CharField(widget=forms.PasswordInput, label="Confirm password")
    
    class Meta:
        model = User
        fields=[
            'username',
            'email',
            'password',
            'password2'
        ]

    def clean_email(self):
        email = self.cleaned_data.get('email')
        email_qs = User.objects.filter(email=email)
        if email_qs.exists():
            raise forms.ValidationError("This e-mail is already registered")
        return email

