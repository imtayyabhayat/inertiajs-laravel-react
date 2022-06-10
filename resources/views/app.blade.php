<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title ?? 'Inertia JS' }}</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <script>
        window.base_url = "{{ url('/') }}";
    </script>
    <script src="{{ mix('js/app.js') }}" defer></script>
</head>
<body>
    @inertia()
</body>
</html>