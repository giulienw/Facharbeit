FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["Facharbeit.Backend/Facharbeit.Backend.csproj", "Facharbeit.Backend/"]
RUN dotnet restore "Facharbeit.Backend/Facharbeit.Backend.csproj"
COPY . .
WORKDIR "/src/Facharbeit.Backend"
RUN dotnet build "Facharbeit.Backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Facharbeit.Backend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Facharbeit.Backend.dll"]
