FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src
COPY ["src/Potholio.Web.Host/Potholio.Web.Host.csproj", "src/Potholio.Web.Host/"]
COPY ["src/Potholio.Web.Core/Potholio.Web.Core.csproj", "src/Potholio.Web.Core/"]
COPY ["src/Potholio.Application/Potholio.Application.csproj", "src/Potholio.Application/"]
COPY ["src/Potholio.Core/Potholio.Core.csproj", "src/Potholio.Core/"]
COPY ["src/Potholio.EntityFrameworkCore/Potholio.EntityFrameworkCore.csproj", "src/Potholio.EntityFrameworkCore/"]
WORKDIR "/src/src/Potholio.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/Potholio.Web.Host", "src/Potholio.Web.Host"]
COPY ["src/Potholio.Web.Core", "src/Potholio.Web.Core"]
COPY ["src/Potholio.Application", "src/Potholio.Application"]
COPY ["src/Potholio.Core", "src/Potholio.Core"]
COPY ["src/Potholio.EntityFrameworkCore", "src/Potholio.EntityFrameworkCore"]
WORKDIR "/src/src/Potholio.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:8.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "Potholio.Web.Host.dll"]

