@extend('layout.default')


@section('content')
	@if(count($user))
		@foreach($users as $user)
			<p>{{{ $user->email or 'default value' }}}</p>
		@endforeach
	@endif
@stop